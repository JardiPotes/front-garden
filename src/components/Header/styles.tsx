import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #b5ffac;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  position: sticky;
  top: 0px;
  width: 100%;
  height: 7em;
  z-index: 3;
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
    max-width: 100%;
    max-heigth: 100%;
    object-fit: contain;
    margin-right: 2em;
  }
`;

export const Logo = styled.div`
  max-width: 80px;

  & > img {
    max-width: 100%;
    max-heigth: 100%;
    object-fit: contain;
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
  margin-left: 2em;
`;
export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`;
