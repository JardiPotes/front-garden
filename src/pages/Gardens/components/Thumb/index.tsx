import {useQuery} from 'react-query';

import {axios} from '../../../../ClientProvider';
import {User} from '../../../../utils/user';
import {Garden} from '../../index';
import * as S from './styles';

type GardenThumbProps = {
  garden: Garden;
};

export const GardenThumb: React.FC<GardenThumbProps> = ({garden}) => {
  const defaultImage = 'public/images/garden2.jpg';
  const defaultUserImage = 'public/images/jardinier.jpg';
  const pin = 'public/images/pin.png';
  const {title, description, zipcode, image, user_id} = garden;

  const {data: user} = useQuery({
    queryKey: [`user_${user_id}`],
    queryFn: async () => {
      const data = await axios
        .get<User>(`users/${user_id}`)
        .then(res => res.data)
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
      return data;
    },
  });

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
