import React from "react";
import * as S from "./styles";
import { WORDINGS } from "../../wordings";
import Chicken from "../../../../assets/chicken-icon.png";
import Flowers from "../../../../assets/flowers-icon.png";

export const TitleCard = () => {
  return (
    <S.TitleCardStyle>
      <S.FlowersIcon>
        <img src={Flowers} />
      </S.FlowersIcon>

      <S.TitleCardText>{WORDINGS.title}</S.TitleCardText>
      <S.ChickenIcon>
        <img src={Chicken} />
      </S.ChickenIcon>
    </S.TitleCardStyle>
  );
};
