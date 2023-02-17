import styled from "styled-components";

const Colors = {
  cardBackground: "#FCF9F9",
} as const;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.cardBackground};
  border-radius: 20px;
  padding: 20px;
`;
