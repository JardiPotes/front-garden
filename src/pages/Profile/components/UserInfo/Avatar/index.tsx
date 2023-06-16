import {AxiosError, AxiosResponse} from 'axios';
import {FC, useState} from 'react';
import {useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom';

import {axios} from '../../../../../ClientProvider';
import {Button} from '../../../../../components/Button';
import {LoginModal} from '../../../../../components/LoginForm';
import {CenterElement} from '../../../../../components/SignUpForm/styles';
import useToken from '../../../../../hooks/useToken';
import {getUser} from '../../../../../utils/user';
import {UserInfoProps} from '..';
import * as S from './styles';

type AvatarProps = Pick<UserInfoProps['user'], 'profile_image'> & {
  isConnected: boolean;
  isConnectedUser: boolean;
  id: string | undefined;
};

type CreateConvArgs = {
  chat_sender_id: number | string | undefined;
  chat_receiver_id: number | string | undefined;
};

type ErrorData = {
  conversation_id: string;
};

type ResData = {
  id: string;
};

export const Avatar: FC<AvatarProps> = ({
  profile_image,
  isConnected,
  isConnectedUser,
  id,
}) => {
  const user = getUser();
  const {token, setToken} = useToken();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const postData = (): void => {
    try {
      createConversation({
        chat_sender_id: user?.id,
        chat_receiver_id: id,
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const {mutate: createConversation} = useMutation(
    async (data: CreateConvArgs) => {
      return await axios.post(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `conversations?current_user_id=${user?.id}`,
        data,
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: token && `Token ${token}`,
          },
        },
      );
    },
    {
      onSuccess: (res: AxiosResponse<ResData>) => {
        navigate(`/messages/${res?.data?.id}`);
      },
      onError: (err: AxiosError<ErrorData>) => {
        // eslint-disable-next-line no-console
        console.dir({err});
        if (err?.response?.data?.conversation_id) {
          navigate(`/messages/${err.response.data.conversation_id}`);
        }
      },
    },
  );

  return (
    <>
      <CenterElement $fit>
        <S.Avatar src={profile_image} />
        {!isConnected && (
          <Button onClick={(): void => setIsOpen(true)}>
            Connectez-vous pour envoyer un message
          </Button>
        )}
        {!isConnectedUser && isConnected && (
          <Button onClick={postData} data-test-id="message_me">
            Envoyer un message
          </Button>
        )}
      </CenterElement>
      {isOpen && <LoginModal setIsOpen={setIsOpen} setToken={setToken} />}
    </>
  );
};
