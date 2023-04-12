import { ButtonStyle, ButtonText } from "./styles";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: JSX.Element | string;
  small?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children, small }) => {
  return (
    <ButtonStyle onClick={onClick} small={small}>
      <ButtonText>{children}</ButtonText>
    </ButtonStyle>
  );
};
