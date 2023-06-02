import { ButtonHTMLAttributes } from "react";

import { ButtonStyle, ButtonText } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: JSX.Element | string;
  small?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  small,
  ...props
}) => {
  return (
    <ButtonStyle onClick={onClick} small={small} {...props}>
      <ButtonText>{children}</ButtonText>
    </ButtonStyle>
  );
};
