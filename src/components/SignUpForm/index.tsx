import { useState, useEffect, FC } from "react";
import * as S from "../SignUpForm/styles";
import Logo from "../../assets/jardi-logo-trans.png";
import CrossIcon from "../../assets/cross-icon.png";
import { Button } from "../Buttons";
import { ModalFormWordings, ButtonWordings } from "../../wordings";
import { useForm } from "react-hook-form";

import axios from "../../ClientProvider/axiosConfig";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

type SignUpModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SignUpModal = ({ setIsOpen }: SignUpModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createUserResult, setCreateUserResult] = useState<string | null>(null);

  const formatResponse = (res: unknown): string => {
    return JSON.stringify(res, null, 2);
  };

  const onSubmit = (data) => {
    postData(data);
  };

  const { isLoading: isCreatingUser, mutate: createUser } = useMutation(
    async (data) => {
      console.log(data)
      const { email, password, nickname, profileImage, bio, hasGarden } = data;
      return await axios.post(`/register`, {
        email,
        password,
        nickname,
        profileImage,
        bio,
        hasGarden,
      });
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status,
          headers: res.headers,
          data: res.data,
        };
        setCreateUserResult(formatResponse(result));
      },
      onError: (err: AxiosError) => {
        console.dir({ err });
        setCreateUserResult(formatResponse(err.response?.data || err));
      },
    }
  );

  useEffect(() => {
    if (isCreatingUser) setCreateUserResult("creating...");
  }, [isCreatingUser]);

  const postData = (data) => {
    try {
      createUser(data);
    } catch (err) {
      setCreateUserResult(formatResponse(err));
    }
  };

  return (
    <S.Modal>
      <S.ModalHeader>
        <S.LogoTitleWrapper>
          <S.Logo>
            <img src={Logo} />
          </S.Logo>
          <S.Title>{ModalFormWordings.headline}</S.Title>
        </S.LogoTitleWrapper>
        <S.Cross onClick={() => setIsOpen(false)}>
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
        </S.labelInputWrapper>
        <S.labelInputWrapper>
          <S.inputLabel>{ModalFormWordings.password}</S.inputLabel>
          <S.ModalBodyInputBody
            type="password"
            placeholder="********"
            {...register("password", { required: true })}
          />
        </S.labelInputWrapper>
        <S.labelInputWrapper>
          <S.inputLabel>{ModalFormWordings.pseudo}</S.inputLabel>
          <S.ModalBodyInputBody
            placeholder="Huguette-JMiche"
            {...register("nickname", { required: true })}
          />
        </S.labelInputWrapper>
        <S.labelInputWrapper>
          <S.inputLabel>{ModalFormWordings.bio}</S.inputLabel>
          <S.ModalBodyTextAreaBody
            placeholder="J'aimerais bien vous inviter à faire une raclette dans mon jardin situé Paris 16ème arrondissement quand il fait 50 degrés."
            {...register("bio")}
          />
        </S.labelInputWrapper>
        <S.hasGardenWrapper>
          <S.inputLabel>{ModalFormWordings.haveGarden}</S.inputLabel>
          <S.inputLabel>oui</S.inputLabel>
          <S.hasGardenInput
            type="radio"
            id="oui"
            {...register("hasGarden", { required: true })}
            value="true"
          />
          <S.inputLabel>non</S.inputLabel>
          <S.hasGardenInput
            type="radio"
            id="non"
            {...register("hasGarden", { required: true })}
            value="false"
          />
        </S.hasGardenWrapper>
        <Button onClick={handleSubmit(onSubmit)}>{ButtonWordings.join}</Button>
      </S.ModalBodyWrapper>
    </S.Modal>
  );
};
