import styled from "styled-components";

const Colors = {
  cardBackground: "#FCF9F9",
} as const;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.cardBackground};
  border-radius: 20px;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: large;
  font-family: "Amiko";
  margin: 0;
`;

export const Experience = styled.span`
  margin: 0;
`;
