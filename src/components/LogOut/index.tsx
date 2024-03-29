import {AxiosError} from 'axios';
import {FC} from 'react';
import {useMutation} from 'react-query';
import {useLocation, useNavigate} from 'react-router-dom';

import {ButtonWordings} from '@/assets/wordings';
import axios from '@/ClientProvider/axiosConfig';
import {removeUser} from '@/utils/user';

import {Button} from '../Button';

type LogOutButtonProps = {
  removeToken: () => void;
  token: string | null;
};

export const LogOutButton: FC<LogOutButtonProps> = ({removeToken}) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {mutate: logOut} = useMutation(
    async () => {
      return await axios.post(`auth/logout`);
    },
    {
      onSuccess: () => {
        removeToken();
        removeUser();
        if (pathname !== '/') {
          navigate('/');
        } else {
          window.location.reload();
        }
      },
      onError: (err: AxiosError) => {
        // eslint-disable-next-line no-console
        console.dir({err});
      },
    },
  );

  return (
    <Button onClick={(): void => logOut()} data-test-id="logout_button">
      {ButtonWordings.logout}
    </Button>
  );
};
