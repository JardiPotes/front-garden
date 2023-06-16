import {Garden} from '../../index';
import * as S from './styles';

type GardenThumbProps = {
  garden: Garden;
};

export const GardenThumb: React.FC<GardenThumbProps> = ({garden}) => {
  const defaultImage = 'public/images/garden2.jpg';
  const defaultUserImage = 'public/images/jardinier.jpg';
  const pin = 'public/images/pin.png';
  const {title, description, zipcode, image, user, user_id} = garden;

  /* FIXME When we have address in the future, we can use this.

   const adressLink =
    address && `https://maps.google.com/maps?q=${address}+${zipcode}`;
*/
  return (
    <S.Wrapper>
      <S.Image src={image ? image : defaultImage} />
      <S.InfoWrapper>
        <S.RouterLink to={`../profile/${user_id}`} data-test-id="garden_thumb">
          <S.TitleWrapper>
            <S.Icon
              src={user?.profile_image ? user.profile_image : defaultUserImage}
            />
            <div>{title}</div>
          </S.TitleWrapper>
          <div>{description}</div>
        </S.RouterLink>
        <S.Address>
          <S.Pin src={pin} />
          {zipcode}
        </S.Address>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
