import { useState, useEffect } from "react";
import * as S from "../SignUpForm/styles";
import Logo from "../../assets/jardi-logo-trans.png";
import CrossIcon from "../../assets/cross-icon.png";
import { Button } from "../Buttons";
import { ModalFormWordings, ButtonWordings } from "../../wordings";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "../../ClientProvider/axiosConfig";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

const MandatoryField: React.FC = () => {
  return <div>Ce champ est obligatoire !</div>;
};

type SignUpModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type UserData = {
  email: string;
  password: string;
  nickname: string;
  profileImage: File;
  bio?: string;
  hasGarden: boolean;
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
      return await axios.post(`auth/register`, data);
    },
    {
      onSuccess: () => {
        setCreateUserResult({
          status: "success",
          message: "votre compte est bien créé !",
        });
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
    <S.Modal>
      <S.ModalHeader>
        <S.LogoTitleWrapper>
          <S.Logo>
            <img src={Logo} />
          </S.Logo>
          <S.Title>{ModalFormWordings.headline}</S.Title>
        </S.LogoTitleWrapper>
        <S.Cross onClick={(): void => setIsOpen(false)}>
          <img src={CrossIcon} />
        </S.Cross>
      </S.ModalHeader>
      <S.HeaderUnderLine />
      <S.ModalBodyWrapper>
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
        <S.radioWrapper>
          <S.inputLabel>{ModalFormWordings.haveGarden}</S.inputLabel>
          <S.radioInputWrapper>
            <S.inputLabel>oui</S.inputLabel>
            <S.radioInput
              type="radio"
              id="oui"
              {...register("hasGarden", { required: true })}
              value="true"
            />
          </S.radioInputWrapper>
          <S.radioInputWrapper>
            <S.inputLabel>non</S.inputLabel>
            <S.radioInput
              type="radio"
              id="non"
              {...register("hasGarden", { required: true })}
              value="false"
            />
          </S.radioInputWrapper>
        </S.radioWrapper>
        {errors.hasGarden && <MandatoryField />}
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <Button onClick={handleSubmit(postData)}>{ButtonWordings.join}</Button>
        {createUserResult.status && createUserResult.message}
      </S.ModalBodyWrapper>
    </S.Modal>
  );
};
