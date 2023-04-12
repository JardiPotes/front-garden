import styled from "styled-components";

const Colors = {
  primary: "#CEA37C",
  hover: "#B5FFAC",
  textColor: "#fff"
} as const;

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.primary};
  height: 3em;
  min-width: ${(props: { small?: boolean }): string =>
    props.small ? "5em" : "15em"};
  border-radius: 30px;
  border: 1px transparent solid;
  margin: 1em;

  &:focus {
    border-color: ${Colors.hover};
    box-shadow: 0 0 15px 0 ${Colors.hover};
    outline: 0;
  }

  img {
    max-height: 2em;
    max-width: 100%;
  }
`;

export const ButtonText = styled.p`
  font-size: 1em;
  color: ${Colors.textColor};
  text-align: center;
`;
