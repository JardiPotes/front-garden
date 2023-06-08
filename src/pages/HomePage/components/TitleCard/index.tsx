import { FC } from "react";

import WhiteChicken from "../../../../assets/white-chicken.png";
import WhiteFlower from "../../../../assets/white-flower.png";
import { HomePageWordings } from "../../../../assets/wordings";
import * as S from "./styles";

export const TitleCard: FC = () => {
  return (
    <S.TitleCardStyle>
      <S.FlowersIcon>
        <img src={WhiteFlower} />
      </S.FlowersIcon>

      <S.TitleCardText>{HomePageWordings.title}</S.TitleCardText>
      <S.ChickenIcon>
        <img src={WhiteChicken} />
      </S.ChickenIcon>
    </S.TitleCardStyle>
  );
};
