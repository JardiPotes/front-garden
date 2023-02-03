import { ButtonStyle, ButtonText } from "./styles";


type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>,
  children: JSX.Element | string
}

export const Button: React.FC<ButtonProps> = ({onClick, children}) => {
  return (
    <ButtonStyle onClick = {onClick}>
      <ButtonText>{children}</ButtonText>
    </ButtonStyle>
  );
};
