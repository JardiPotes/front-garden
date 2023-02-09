import styled from "styled-components";

const Colors = {
  cardBackground: "#FCF9F9",
} as const;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.cardBackground};
  border-radius: 20px;
`;
