import { FC } from "react";

import { GardensProps } from "..";
import * as S from "./styles";

interface GardenInfoProps {
  garden: GardensProps["gardens"][number];
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
      <S.Description>{description}</S.Description>
      <S.Image src={image ? image : defaultImage} />
    </>
  );
};
