import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #b5ffac;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const TitleWrapper = styled.div`
  justify-content: center;
  width: 100%;
`;
export const Title = styled.h1`
  font-weight: bold;
  text-align: center;
`;

export const SectionWrapper = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const SubSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.h3`
  text-transform: capitalize;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.7em;
  padding-bottom: 1em;
`;
