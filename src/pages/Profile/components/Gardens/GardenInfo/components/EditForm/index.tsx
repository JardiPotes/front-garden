import {FC} from 'react';
import {useForm} from 'react-hook-form';
import {useMutation, useQueryClient} from 'react-query';
import useBreakpoint from 'use-breakpoint';

import {axios} from '../../../../../../../ClientProvider';
import {Button} from '../../../../../../../components/Button';
import {Modal} from '../../../../../../../components/Modal';
import * as S from '../../../../../../../components/Modal/styles';
import {CenterElement} from '../../../../../../../GlobalStyles';
import {BREAKPOINTS} from '../../../../../../../GlobalStyles';
import useToken from '../../../../../../../hooks/useToken';
import {getUser} from '../../../../../../../utils/user';
import {Garden} from '../../../../..';

type EditFormProps = Omit<Garden, 'id'> & {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  gardenId: Garden['id'];
};

export const EditForm: FC<EditFormProps> = ({
  setIsOpen,
  gardenId,
  title,
  description,
  zipcode,
}) => {
  const {register, handleSubmit} = useForm<Omit<Garden, 'id'>>();
  const {breakpoint} = useBreakpoint(BREAKPOINTS);

  const isMobile = breakpoint === 'mobile';

  const user = getUser();
  const {token} = useToken();

  const queryClient = useQueryClient();

  const {mutate: editGarden} = useMutation(
    async (data: Omit<Garden, 'id'>) => {
      return axios
        .put(
          `gardens/${gardenId}`,
          {
            ...data,
            user_id: user && user.id,
          },
          {
            headers: {Authorization: token && `Token ${token}`},
          },
        )
        .then((res: {data: Garden}) => res.data);
    },
    {
      onSuccess: (_, updatedVariables) => {
        queryClient.setQueryData(
          ['user', user?.id.toString()],
          (old?: {data: {gardens: Garden[]}}) => {
            return {
              ...old,
              data: {
                ...old?.data,
                gardens:
                  old?.data.gardens.map(garden =>
                    garden.id === gardenId
                      ? {
                          ...garden,
                          ...updatedVariables,
                        }
                      : garden,
                  ) ?? [],
              },
            };
          },
        );
        setIsOpen(false);
      },
    },
  );

  const onSubmit = (data: Omit<Garden, 'id'>): void => {
    editGarden(data);
  };

  return (
    <Modal setIsOpen={setIsOpen}>
      <form /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
        onSubmit={handleSubmit(onSubmit)}>
        <S.FormWrapper>
          <S.labelInputWrapper>
            <S.inputLabel htmlFor="title">Nom : </S.inputLabel>
            <S.ModalBodyInputBody
              type="text"
              id="title"
              {...register('title')}
              defaultValue={title}
              required
            />
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel htmlFor="description">Description : </S.inputLabel>
            <S.ModalBodyTextAreaBody
              {...register('description')}
              defaultValue={description}
              required
            />
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel htmlFor="zipcode">Code postal : </S.inputLabel>
            <S.ModalBodyInputBody
              type="text"
              {...register('zipcode')}
              defaultValue={zipcode}
              required
            />
          </S.labelInputWrapper>
          <CenterElement flexDirection={isMobile ? 'column' : 'row'}>
            <Button type="submit">SOUMETTRE</Button>
            <Button type="reset">RÉINITIALISER</Button>
          </CenterElement>
        </S.FormWrapper>
      </form>
    </Modal>
  );
};
