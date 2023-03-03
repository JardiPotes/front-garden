import { FC, Fragment } from "react";
import { SectionHeader } from "../SectionHeader";
import { GardenInfo } from "./GardenInfo";

import Logo from "../../../../assets/jardi-logo-trans.png";
import * as S from "./styles";

export interface Garden {
  id: number;
  title: string;
  description: string;
  zipcode: string;
  photos: { image: string }[];
}

interface GardensProps {
  gardens?: Garden[];
}

export const Gardens: FC<GardensProps> = ({ gardens }) => {
  if (!gardens || !gardens.length) return null;
  const sectionTitle = gardens.length > 1 ? "Mes jardins" : "Mon jardin";

  return (
    <>
      <SectionHeader>{sectionTitle}</SectionHeader>
      {gardens.map((garden, index) => (
        <Fragment key={garden.id}>
          {!!index && <S.SeparationIcon src={Logo} />}
          <GardenInfo garden={garden} />
        </Fragment>
      ))}
    </>
  );
};
