import styled from "styled-components";

const Colors = {
  background: "#e6b873",
} as const;

export const SectionHeader = styled.h2`
  padding: 50px;
  font-size: xx-large;
  background-color: ${Colors.background};
  width: 100%;
  text-align: center;
`;
