import styled from "styled-components";

const Colors = {
  bg: "#D9D9D9",
  line: "#86E7B8",
  inputArea: "#FCF9F9",
  textInput: "#9A9595",
  cross: "#000000",
} as const;

export const Modal = styled.div`
  height: 50em;
  width: 30em;
  border-radius: 50px;
  background-color: ${Colors.bg};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  max-width: 80px;

  & > img {
    max-width: 100%;
    max-heigth: 100%;
    object-fit: contain;
  }
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2em;
`;

export const Cross = styled.div`
  max-width: 80px;

  & > img {
    max-width: 100%;
    max-heigth: 100%;
    object-fit: contain;
  }
`;

export const ModalBodySignIn = styled.div``;

export const ModalBodySignUp = styled.div``;
