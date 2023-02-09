import { FC } from "react";
import { Button } from "../Buttons";
import { ButtonWordings } from "../../wordings";
import axios from "../../ClientProvider/axiosConfig";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

type LogOutButtonProps = {
  removeToken: () => void;
};

export const LogOutButton: FC<LogOutButtonProps> = ({ removeToken }) => {
  const { mutate: logOut } = useMutation(
    async () => {
      return await axios.post(`auth/logout`);
    },
    {
      onSuccess: () => {
        removeToken();
      },
      onError: (err: AxiosError) => {
        // eslint-disable-next-line no-console
        console.dir({ err });
      },
    }
  );

  return (
    <Button onClick={(): void => logOut()}>{ButtonWordings.logout}</Button>
  );
};
