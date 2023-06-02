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
    image,
    user_image = defaultUserImage,
    user_id,
  } = garden;
  const adressLink =
    address && `https://maps.google.com/maps?q=${address}+${zipcode}`;

  return (
    <S.Wrapper>
      <S.Image src={image ? image : defaultImage} />
      <S.InfoWrapper>
        <S.RouterLink to={`../profile/${user_id}`}>
          <S.TitleWrapper>
            <S.Icon src={user_image} /> <div>{title}</div>
          </S.TitleWrapper>
          <div>{description}</div>
        </S.RouterLink>
        {adressLink && (
          <S.Address>
            <a href={adressLink}>
              <S.Pin src={pin} />
              {address}
            </a>
          </S.Address>
        )}
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
