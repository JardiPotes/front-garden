import React from "react";
import { ButtonStyle, ButtonText } from "./styles";
import { WORDINGS } from "./wordings";

export const Button: React.FC<{onClick?: React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
  return (
    <ButtonStyle>
      <ButtonText>{WORDINGS.continue}</ButtonText>
    </ButtonStyle>
  );
};
