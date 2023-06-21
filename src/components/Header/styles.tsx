import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: #b5ffac;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  top: 0px;
  width: 100%;
  height: 7em;
  z-index: 3;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    padding-top: 1em;
    column-gap: 1em;
    position: static;
  }
`;

export const StyledTitleLink = styled(Link)`
  font-size: 1.8em;
  text-align: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  & > img {
    max-width: 70px;
    object-fit: contain;
  }
`;

export const Logo = styled.div`
  max-width: 80px;

  & > img {
    max-width: 70px;
    object-fit: contain;

    @media (max-width: 480px) {
      max-width: 50px;
    }
  }
`;

export const StyledLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: black;
  font-size: 1.2em;
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

export const RoundImage = styled.img`
  border-radius: 50%;
  max-width: 200px;
  max-height: 50px;
  height: auto;
`;

export const ImageStyledLink = styled.a`
  display: flex;
  text-decoration: none;
  color: inherit;
`;
