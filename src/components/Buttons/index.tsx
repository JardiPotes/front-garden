import React from "react";
import { render } from "react-dom";
import { ButtonStyle, ButtonText } from "./styles";
import { WORDINGS } from "./wordings";

export const Button = () => {
  return (
    <ButtonStyle>
      <ButtonText>{WORDINGS.continue}</ButtonText>
    </ButtonStyle>
  );
};
