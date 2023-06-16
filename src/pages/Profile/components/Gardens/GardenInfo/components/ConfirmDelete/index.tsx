import {FC} from 'react';
import {useMutation, useQueryClient} from 'react-query';
import {useParams} from 'react-router-dom';

import CrossIcon from '../../../../../../../assets/cross-icon.png';
import {ButtonWordings} from '../../../../../../../assets/wordings';
import {axios} from '../../../../../../../ClientProvider';
import {Button} from '../../../../../../../components/Button';
import {TransparentButton} from '../../../../../../../components/Button/TransparentButton';
import useToken from '../../../../../../../hooks/useToken';
import {Garden} from '../../../../..';
import * as S from './styles';

export const ConfirmDelete: FC<{
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  gardenId: Garden['id'];
}> = ({setIsOpen, gardenId}) => {
  const {token} = useToken();
  const queryClient = useQueryClient();
  const {id: userId} = useParams();

  const {mutate: deleteGarden} = useMutation(
    async () =>
      axios.delete(`gardens/${gardenId}`, {
        headers: {Authorization: token && `Token ${token}`},
      }),
    {
      onSuccess: () => {
        queryClient.setQueryData(
          ['user', userId],
          (old?: {data: {gardens: Garden[]}}) => ({
            ...old,
            data: {
              ...old?.data,
              gardens:
                old?.data.gardens.filter(garden => garden.id !== gardenId) ??
                [],
            },
          }),
        );
        setIsOpen(false);
      },
    },
  );

  return (
    <S.AlertBox onClick={(): void => setIsOpen(false)}>
      <S.AlertContent onClick={(e): void => e.stopPropagation()}>
        <TransparentButton
          style={{alignSelf: 'end'}}
          onClick={(): void => setIsOpen(false)}>
          <S.Icon src={CrossIcon} />
        </TransparentButton>
        <p>Attention, cette opération n&apos;est pas réversible !</p>
        <Button onClick={(): void => deleteGarden()}>
          {ButtonWordings.confirmDelete}
        </Button>
      </S.AlertContent>
    </S.AlertBox>
  );
};
