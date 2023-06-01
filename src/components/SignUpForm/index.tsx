import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import axios from "../../ClientProvider/axiosConfig";
import { saveUser } from "../../utils/user";
import useToken from "../../utils/useToken";
import { ButtonWordings, ModalFormWordings } from "../../wordings";
import { Button } from "../Buttons";
import { Modal } from "../Modal";
import * as S from "../Modal/styles";
import { Uploader } from "../Uploader";
import { CenterElement } from "./styles";

const MandatoryField: React.FC = () => {
  return <div>Ce champ est obligatoire !</div>;
};

type SignUpModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserData = {
  email: string;
  password: string;
  nickname: string;
  profile_image?: File | FileList;
  bio?: string;
  experience?: number;
};

export const SignUpModal: React.FC<SignUpModalProps> = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const expOptions = [1, 2, 3, 4, 5];

  const [createUserResult, setCreateUserResult] = useState<
    Record<string, string | null>
  >({ status: null, message: "" });

  const navigate = useNavigate();
  const { setToken } = useToken();
  const formatResponse = (res: unknown): string => {
    return JSON.stringify(res, null, 2);
  };

  const postData: SubmitHandler<UserData> = (data) => {
    try {
      createUser(data);
    } catch (err) {
      setCreateUserResult({ status: "error", message: formatResponse(err) });
    }
  };

  const { isLoading: isCreatingUser, mutate: createUser } = useMutation(
    async (data: UserData) => {
      if (data.profile_image instanceof FileList) {
        data.profile_image = data.profile_image[0];
      }
      return await axios.post(`auth/register`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    {
      onSuccess: async (res, data) => {
        const userId = res?.data?.id;
        setCreateUserResult({
          status: "success",
          message: "votre compte est bien créé !",
        });
        try {
          const loginResponse = await axios.post("auth/login", {
            email: data.email,
            password: data.password,
          });
          console.log("loginres", loginResponse);
          const authToken = loginResponse?.data?.auth_token;
          console.log("token", authToken);
          if (userId && authToken) {
            setToken(authToken);
            saveUser(loginResponse.data.user);
            navigate(`/profile/${userId}`);
          }
        } catch (error) {
          console.error("Login error", error);
        }
      },
      onError: (err: AxiosError) => {
        // eslint-disable-next-line no-console
        console.dir({ err });
        const errMessage = formatResponse(err?.response?.data);
        setCreateUserResult({
          status: "error",
          message: `Oups, il y a un problème : ${errMessage}`,
        });
      },
    }
  );

  useEffect(() => {
    if (isCreatingUser)
      setCreateUserResult({ status: "creating", message: "...creating" });
  }, [isCreatingUser]);

  return (
    <Modal setIsOpen={setIsOpen}>
      <form>
        <S.FormWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.email}</S.inputLabel>
            <S.ModalBodyInputBody
              placeholder="ilovecss@sarcasm.fr"
              {...register("email", { required: true })}
            />
            {errors.email && <MandatoryField />}
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.password}</S.inputLabel>
            <S.ModalBodyInputBody
              type="password"
              placeholder="********"
              {...register("password", { required: true })}
            />
            {errors.password && <MandatoryField />}
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.pseudo}</S.inputLabel>
            <S.ModalBodyInputBody
              placeholder="Huguette-JMiche"
              {...register("nickname", { required: true })}
            />
            {errors.nickname && <MandatoryField />}
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.bio}</S.inputLabel>
            <S.ModalBodyTextAreaBody
              placeholder="J'aimerais bien vous inviter à faire une raclette dans mon jardin situé Paris 16ème arrondissement quand il fait 50 degrés."
              {...register("bio")}
            />
          </S.labelInputWrapper>
          <S.radioWrapper>
            <S.inputLabel>{ModalFormWordings.experience}</S.inputLabel>
            {expOptions.map((option) => (
              <S.radioInputWrapper key={option.toString()}>
                <S.inputLabel>{option}</S.inputLabel>
                <S.radioInput
                  type="radio"
                  id={option.toString()}
                  {...register("experience")}
                  value={option}
                />
              </S.radioInputWrapper>
            ))}
          </S.radioWrapper>
          <S.Tip>{ModalFormWordings.experienceTip}</S.Tip>
          <Uploader register={register} />
          <CenterElement>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <Button onClick={handleSubmit(postData)}>
              {ButtonWordings.join}
            </Button>
            {createUserResult.status && createUserResult.message}
          </CenterElement>
        </S.FormWrapper>
      </form>
    </Modal>
  );
};
