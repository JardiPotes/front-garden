import { AxiosError } from "axios";
import { FC } from "react";
import { useMutation } from "react-query";

import axios from "../../ClientProvider/axiosConfig";
import { ButtonWordings } from "../../wordings";
import { Button } from "../Buttons";
import { removeUser } from "../../utils/user";

type LogOutButtonProps = {
  removeToken: () => void;
  token: string
};

export const LogOutButton: FC<LogOutButtonProps> = ({ removeToken, token }) => {
  console.log(token)
  const { mutate: logOut } = useMutation(
    async () => {
      return await axios.post(`auth/logout`, {headers: {"Authorization": `token ${token}`}});
    },
    {
      onSuccess: () => {
        removeToken();
        removeUser()
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
