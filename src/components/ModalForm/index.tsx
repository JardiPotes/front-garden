import { FC, useState, Dispatch, SetStateAction, useEffect } from "react";
import * as S from "../SignUpForm/styles";
import Logo from "../../assets/jardi-logo-trans.png";
import CrossIcon from "../../assets/cross-icon.png";
import { Button } from "../Buttons";
import { ModalFormWordings, ButtonWordings } from "../../wordings";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "../../ClientProvider/axiosConfig";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type LoginData = {
  email: string;
  password: string;
};

export const LoginModal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const formatResponse = (res: unknown): string => {
    return JSON.stringify(res, null, 2);
  };

  const [logInStatus, setlogInStatus] = useState(null)

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    console.log(data);
    loginUser(data);
  };

  const { isLoading: isLoading, mutate: loginUser } = useMutation(
    async (data: LoginData) => {
      return await axios.post(`auth/login`, data);
    },
    {
      onSuccess: (res) => {
        console.log(res);
        setlogInStatus({
          status: "success",
          message: "connecté !",
        });
      },
      onError: (err: AxiosError) => {
        // eslint-disable-next-line no-console
        console.dir({ err });
        const errMessage = formatResponse(err?.response?.data);
        setlogInStatus({
          status: "error",
          message: `Oups, il y a un problème : ${errMessage}`,
        });
      },
    }
  );

  useEffect(() => {
    if (isLoading)
    setlogInStatus({ status: "loading", message: "...loading" });
  }, [logInStatus]);

  if (!isOpen) return null;
  return (
    isOpen && (
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
            <S.ModalBodyInputBody {...register("email", { required: true })} />
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.password}</S.inputLabel>
            <S.ModalBodyInputBody
              {...register("password", { required: true })}
            />
          </S.labelInputWrapper>
          <Button onClick={handleSubmit(onSubmit)}>
            {ButtonWordings.connection}
          </Button>
        </S.ModalBodyWrapper>
      </S.Modal>
    )
  );
};
