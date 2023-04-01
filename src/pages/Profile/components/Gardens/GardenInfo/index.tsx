import { FC } from "react";

import { GardensProps } from "..";
import * as S from "./styles";

interface GardenInfoProps {
  garden: GardensProps["gardens"][number];
}

export const GardenInfo: FC<GardenInfoProps> = ({
  garden: { title, id, zipcode, description, photos },
}) => {
  return (
    <>
      <S.Title id={`${id}`}>
        {title} - {zipcode}
      </S.Title>
      <S.Description>{description}</S.Description>
      {!!photos?.length && <S.Image src={photos[0].image} />}
    </>
  );
};
