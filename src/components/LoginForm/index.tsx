import {AxiosError, AxiosResponse} from 'axios';
import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom';

import {ButtonWordings, ModalFormWordings} from '../../assets/wordings';
import axios from '../../ClientProvider/axiosConfig';
import {CenterElement} from '../../GlobalStyles';
import {saveUser, User} from '../../utils/user';
import {Button} from '../Button';
import {Modal} from '../Modal';
import * as S from '../Modal/styles';

type ModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setShouldRedirect?: Dispatch<SetStateAction<boolean>>;
  setToken: (userToken: string) => void;
};

type LoginData = {
  email: string;
  password: string;
};

type LoginStatus = {
  status: 'success' | 'error' | 'loading' | null;
  message: string;
};

type UserData = {
  data: {
    id: number;
    auth_token: string;
    user: User;
  };
};

type UserResult = AxiosResponse<string, unknown> & UserData;

const MandatoryField: React.FC = () => {
  return <div>Ce champ est obligatoire !</div>;
};

export const LoginModal: FC<ModalProps> = ({
  setIsOpen,
  setToken,
  setShouldRedirect,
}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginData>();

  const navigate = useNavigate();

  const formatResponse = (res: unknown): string => {
    return JSON.stringify(res, null, 2);
  };

  const [logInStatus, setlogInStatus] = useState<LoginStatus>({
    status: null,
    message: '',
  });

  const onSubmit: SubmitHandler<LoginData> = data => {
    loginUser(data);
  };

  const {isLoading, mutate: loginUser} = useMutation(
    async (data: LoginData) => {
      return await axios.post(`auth/login`, data);
    },
    {
      onSuccess: (res: UserResult) => {
        setlogInStatus({
          status: 'success',
          message: 'connecté !',
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setToken(res.data.auth_token);
        saveUser(res.data.user);
        setIsOpen(false);
        if (setShouldRedirect) {
          setShouldRedirect(true);
        }
        navigate(`/profile/${res.data.user.id}`);
      },
      onError: (err: AxiosError) => {
        // eslint-disable-next-line no-console
        console.dir({err});
        const errMessage = formatResponse(err?.response?.data);
        setlogInStatus({
          status: 'error',
          message: `Oups : ${errMessage}`,
        });
      },
    },
  );

  useEffect(() => {
    if (isLoading) setlogInStatus({status: 'loading', message: '...loading'});
  }, [logInStatus]);

  return (
    <Modal setIsOpen={setIsOpen}>
      <form>
        <CenterElement>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.email}</S.inputLabel>
            <S.ModalBodyInputBody
              {...register('email', {required: true})}
              data-test-id="connexion_email"
            />
            {errors.email && <MandatoryField />}
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.password}</S.inputLabel>
            <S.ModalBodyInputBody
              type="password"
              {...register('password', {required: true})}
              data-test-id="connexion_password"
            />
            {errors.password && <MandatoryField />}
          </S.labelInputWrapper>
          <Button
            /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
            onClick={handleSubmit(onSubmit)}
            data-test-id="connexion_submit">
            {ButtonWordings.connection}
          </Button>
          <div data-test-id="connexion_error">
            {logInStatus?.status && logInStatus?.message}
          </div>
        </CenterElement>
      </form>
    </Modal>
  );
};
