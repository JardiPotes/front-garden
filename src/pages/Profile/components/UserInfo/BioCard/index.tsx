import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FC, useState} from 'react';
import {useParams} from 'react-router-dom';

import {UserProfileWordings} from '../../../../../assets/wordings';
import {TransparentButton} from '../../../../../components/Button/TransparentButton';
import {Card} from '../../../../../components/Card';
import {SpaceBetweenRow} from '../../../../../components/Wrappers/SpaceBetweenRow';
import {getUser} from '../../../../../utils/user';
import {Experience} from '../../Experience';
import {UserInfoProps} from '..';
import {EditForm} from '../EditForm';
import * as S from './styles';

type BioCardProps = Pick<
  UserInfoProps['user'],
  'nickname' | 'bio' | 'experience'
>;

export const BioCard: FC<BioCardProps> = user => {
  const userId = getUser()?.id;
  const {id} = useParams();
  const isConnectedOwner = !!userId && userId.toString() === id;

  const [isFormModalOpen, setFormModalOpen] = useState(false);
  return (
    <Card style={{width: '100%'}}>
      <SpaceBetweenRow>
        <S.Title>{user.nickname}</S.Title>
        {isConnectedOwner && (
          <TransparentButton onClick={(): void => setFormModalOpen(true)}>
            <FontAwesomeIcon icon={faEdit} size="xl" />
          </TransparentButton>
        )}
        {isConnectedOwner && isFormModalOpen && (
          <EditForm setIsOpen={setFormModalOpen} {...user} />
        )}
      </SpaceBetweenRow>
      <Experience
        experience={user.experience}
        wording={UserProfileWordings.experience}
      />
      <S.Bio>{user.bio}</S.Bio>
    </Card>
  );
};
