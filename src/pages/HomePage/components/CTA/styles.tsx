import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  justify-content: center;
`;

export const Description = styled.p`
  font-size: 1.5em;
  text-align: left;
`;

export const DogIcon = styled.div`
  & > img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
`;

export const ButtonDogIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
