import { Garden } from "../../index";
import * as S from "./styles";

type GardenThumb = {
  garden: Garden;
};

export const GardenThumb: React.FC<GardenThumb> = ({ garden }) => {
  const defaultImage = "public/images/garden2.jpg";
  const defaultUserImage = "public/images/jardinier.jpg";
  const pin = "public/images/pin.png";
  const {
    title,
    description,
    address,
    zipcode,
    image = defaultImage,
    user_image = defaultUserImage,
  } = garden;
  const adressLink = `https://maps.google.com/maps?q=${address}+${zipcode}`;

  return (
    <S.Wrapper>
      <S.Image src={image} />
      <S.InfoWrapper>
        <div>
          <S.TitleWrapper>
            <S.Icon src={user_image} /> <div>{title}</div>
          </S.TitleWrapper>
          <div>{description}</div>
        </div>
        <S.Address>
          <S.Pin src={pin} />
          <a href={adressLink}>{address}</a>
        </S.Address>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
