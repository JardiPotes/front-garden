import { AxiosError } from "axios";
import { FC } from "react";
import { useMutation } from "react-query";

import axios from "../../ClientProvider/axiosConfig";
import { ButtonWordings } from "../../wordings";
import { Button } from "../Buttons";

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
