import styled from "styled-components";

const Colors = {
  primary: "#CEA37C",
  hover: "#B5FFAC",
} as const;

export const ButtonStyle = styled.div`
  background-color: ${Colors.primary};
  height: 5em;
  max-width: 10em;
  border-radius: 30px;
`;

export const ButtonText = styled.h3`
  font-size: 1.5em;
  color: "white";
`;
