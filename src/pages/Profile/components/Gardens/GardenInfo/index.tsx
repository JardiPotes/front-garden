import { FC } from "react";
import { Garden } from "..";
import * as S from "./styles";

interface GardenInfoProps {
  garden: Garden;
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
