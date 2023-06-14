import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";

import { TransparentButton } from "../../../../../components/Button/TransparentButton";
import { Modal } from "../../../../../components/Modal";
import { getUser } from "../../../../../utils/user";
import { Garden } from "../../..";
import { EditForm } from "./components/EditForm";
import * as S from "./styles";

interface GardenInfoProps {
  garden: Garden;
}

const defaultImage = "../../../../../../public/images/garden2.jpg";

export const GardenInfo: FC<GardenInfoProps> = ({
  garden: { title, id, zipcode, description, image },
  triggerRefetch,
}) => {
  const { id: userId } = useParams();
  const user = getUser();
  const isConnectedOwner = user && user.id.toString() === userId;

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [confirmDeleteIsOpen, setConfirmDeleteIsOpen] = useState(false);

  const formProps = { title, zipcode, description, image };
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
          <TransparentButton>
            <FontAwesomeIcon icon={faTrashCan} size="xl" />
          </TransparentButton>
        </S.PaddedRow>
      )}
      <S.Description>{description}</S.Description>
      <S.Image src={image ? image : defaultImage} />

      {editModalIsOpen && (
        <EditForm
          setIsOpen={setEditModalIsOpen}
          triggerRefetch={triggerRefetch}
          gardenId={id}
          {...formProps}
        />
      )}
      {confirmDeleteIsOpen && <Modal setIsOpen={setConfirmDeleteIsOpen} />}
    </>
  );
};
