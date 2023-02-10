import { FC, useState, Dispatch, SetStateAction, useEffect } from "react";
import * as S from "../Modal/styles";
import { Button } from "../Buttons";
import { ModalFormWordings, ButtonWordings } from "../../wordings";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "../../ClientProvider/axiosConfig";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { ModalHeader } from "../Modal";

type ModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setToken: (userToken: string) => void;
};

type LoginData = {
  email: string;
  password: string;
};

type LoginStatus = {
  status: "success" | "error" | "loading" | null;
  message: string;
};

type UserData = {
  data: {
    auth_token: string;
  };
};

type UserResult = AxiosResponse<string, unknown> & UserData;

const MandatoryField: React.FC = () => {
  return <div>Ce champ est obligatoire !</div>;
};

export const LoginModal: FC<ModalProps> = ({ setIsOpen, setToken }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const formatResponse = (res: unknown): string => {
    return JSON.stringify(res, null, 2);
  };

  const [logInStatus, setlogInStatus] = useState<LoginStatus>({
    status: null,
    message: "",
  });

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    loginUser(data);
  };

  const { isLoading: isLoading, mutate: loginUser } = useMutation(
    async (data: LoginData) => {
      return await axios.post(`auth/login`, data);
    },
    {
      onSuccess: (res: UserResult) => {
        setlogInStatus({
          status: "success",
          message: "connecté !",
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setToken(res.data.auth_token);
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
    if (isLoading) setlogInStatus({ status: "loading", message: "...loading" });
  }, [logInStatus]);

  return (
    <S.Modal>
      <ModalHeader setIsOpen={setIsOpen} />
      <S.ModalBodyWrapper>
        <S.labelInputWrapper>
          <S.inputLabel>{ModalFormWordings.email}</S.inputLabel>
          <S.ModalBodyInputBody {...register("email", { required: true })} />
          {errors.email && <MandatoryField />}
        </S.labelInputWrapper>
        <S.labelInputWrapper>
          <S.inputLabel>{ModalFormWordings.password}</S.inputLabel>
          <S.ModalBodyInputBody
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <MandatoryField />}
        </S.labelInputWrapper>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <Button onClick={handleSubmit(onSubmit)}>
          {ButtonWordings.connection}
        </Button>
        {logInStatus?.status && logInStatus?.message}
      </S.ModalBodyWrapper>
    </S.Modal>
  );
};