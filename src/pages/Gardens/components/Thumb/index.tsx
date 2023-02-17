import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fcf9f9;
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  margin: 50px;
  margin-inline: auto;
  gap: 20px;
  max-width: 80%;
  border-radius: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  align-items: flex-start;
  justify-content: space-between;
  flex: 2;
  gap: 4px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-height: 200px;
  flex: 1;
`;

const Icon = styled.img`
  border-radius: 50px;
  height: 50px;
  width: 50px;
  object-fit: cover;
  object-position: 0 0;
`;

const Address = styled.div`
  background-color: #e5b873;
  border-radius: 20px;
  align-self: flex-end;
  justify-self: flex-end;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 4px;

  a {
    color: black;
    text-decoration: none;
  }
`;

const Pin = styled.img`
  max-height: 20px;
  object-fit: contain;
`;

type Garden = {
  id: number;
  user_id: number;
  title: string;
  description?: string;
  address: string;
  zipcode: number;
  image?: string;
  user_image?: string;
};

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
    <Wrapper>
      <Image src={image} />
      <InfoWrapper>
        <div>
          <TitleWrapper>
            <Icon src={user_image} /> <div>{title}</div>
          </TitleWrapper>
          <div>{description}</div>
        </div>
        <Address>
          <Pin src={pin} />
          <a href={adressLink}>{address}</a>
        </Address>
      </InfoWrapper>
    </Wrapper>
  );
};
