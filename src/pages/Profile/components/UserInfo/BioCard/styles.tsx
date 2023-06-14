import styled from "styled-components";

export const Title = styled.h1`
  font-size: large;
  margin: 0;
`;

export const Bio = styled.p`
  margin-block: auto;
`;

export const SpacerRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    scale: 1.15;
  }
`;
