import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

import { TransparentButton } from "../../../../../components/Button/TransparentButton";
import { Garden } from "../../..";
import * as S from "./styles";

interface GardenInfoProps {
  garden: Garden;
}

export const GardenInfo: FC<GardenInfoProps> = ({
  garden: { title, id, zipcode, description, image },
}) => {
  const defaultImage = "../../../../../../public/images/garden2.jpg";
  return (
    <>
      <S.Title id={`${id}`}>
        {title} - {zipcode}
      </S.Title>
      <S.PaddedRow>
        <TransparentButton>
          <FontAwesomeIcon icon={faEdit} size="xl" />
        </TransparentButton>
        <TransparentButton>
          <FontAwesomeIcon icon={faTrashCan} size="xl" />
        </TransparentButton>
      </S.PaddedRow>
      <S.Description>{description}</S.Description>
      <S.Image src={image ? image : defaultImage} />
    </>
  );
};
