import { AxiosError } from "axios";
import { FC } from "react";
import { useMutation } from "react-query";

import axios from "../../ClientProvider/axiosConfig";
import { removeUser } from "../../utils/user";
import { ButtonWordings } from "../../wordings";
import { Button } from "../Buttons";

type LogOutButtonProps = {
  removeToken: () => void;
  token: string | null;
};

export const LogOutButton: FC<LogOutButtonProps> = ({ removeToken, token }) => {
  if (!token) {
    return null;
  }

  const { mutate: logOut } = useMutation(
    async () => {
      return await axios.post(`auth/logout`, {
        headers: { Authorization: `token ${token}` },
      });
    },
    {
      onSuccess: () => {
        removeToken();
        removeUser();
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
