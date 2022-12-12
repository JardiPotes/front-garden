import styled from "styled-components";

const Colors = {
  primary: "#CEA37C",
  hover: "#B5FFAC",
  textColor: "#fff"
} as const;

export const ButtonStyle = styled.button`
  background-color: ${Colors.primary};
  height: 3em;
  min-width: 15em;
  border-radius: 30px;
  margin-top: 2em;
  border: 1px transparent solid;

  &:focus {
    border-color: ${Colors.hover};
    box-shadow: 0 0 15px 0 ${Colors.hover};
    outline: 0;
  }

`;

export const ButtonText = styled.p`
font-size: 1em; 
color: ${Colors.textColor};
text-align: center;
`


