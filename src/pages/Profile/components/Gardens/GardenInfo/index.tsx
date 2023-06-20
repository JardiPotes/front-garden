import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FC, useState} from 'react';
import {useParams} from 'react-router-dom';

import defaultImage from '../../../../../../public/images/garden2.jpg';
import {TransparentButton} from '../../../../../components/Button/TransparentButton';
import {getUser} from '../../../../../utils/user';
import {Garden} from '../../..';
import {ConfirmDelete} from './components/ConfirmDelete';
import {EditForm} from './components/EditForm';
import * as S from './styles';

interface GardenInfoProps {
  garden: Garden;
}

export const GardenInfo: FC<GardenInfoProps> = ({
  garden: {title, id, zipcode, description, image},
}) => {
  const {id: userId} = useParams();
  const user = getUser();
  const isConnectedOwner = user && user.id.toString() === userId;

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [confirmDeleteIsOpen, setConfirmDeleteIsOpen] = useState(false);

  const formProps = {title, zipcode, description, image};
  return (
    <>
      <S.Title id={`${id}`}>
        {title} - {zipcode}
      </S.Title>
      {isConnectedOwner && (
        <S.PaddedRow>
          <TransparentButton onClick={(): void => setEditModalIsOpen(true)}>
            <FontAwesomeIcon icon={faEdit} size="xl" />
          </TransparentButton>
          <TransparentButton onClick={(): void => setConfirmDeleteIsOpen(true)}>
            <FontAwesomeIcon icon={faTrashCan} size="xl" />
          </TransparentButton>
        </S.PaddedRow>
      )}
      <S.Description>{description}</S.Description>
      <S.Image src={image ? image : defaultImage} />

      {editModalIsOpen && (
        <EditForm setIsOpen={setEditModalIsOpen} gardenId={id} {...formProps} />
      )}
      {confirmDeleteIsOpen && (
        <ConfirmDelete setIsOpen={setConfirmDeleteIsOpen} gardenId={id} />
      )}
    </>
  );
};
