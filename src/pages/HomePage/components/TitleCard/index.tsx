import * as S from "./styles";
import { HomePageWordings } from "../../../../wordings";
//import Chicken from "../../../../assets/chicken-icon.png";
import WhiteChicken from "../../../../assets/white-chicken.png"
import WhiteFlower from "../../../../assets/white-flower.png"
//import Flowers from "../../../../assets/flowers-icon.png";

export const TitleCard = () => {
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
