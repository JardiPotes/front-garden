import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  justify-content: center;

  @media (max-width: 480px) {
    max-width: 100%;
    margin: 1rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5em;
  text-align: left;
  margin: 0.5rem;
`;

export const DogIcon = styled.div`
  & > img {
    max-height: 2.5rem;
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
