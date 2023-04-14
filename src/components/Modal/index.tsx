import CrossIcon from "../../assets/cross-icon.png";
import Logo from "../../assets/jardi-logo-trans.png";
import { ModalFormWordings } from "../../wordings";
import * as S from "./styles";

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ setIsOpen, children }) => {
  return (
    <>
      <S.Modal>
        <S.ModalHeader>
          <S.LogoTitleWrapper>
            <S.Logo>
              <img src={Logo} />
            </S.Logo>
            <S.Title>{ModalFormWordings.headline}</S.Title>
          </S.LogoTitleWrapper>
          <S.Cross onClick={(): void => setIsOpen(false)}>
            <img src={CrossIcon} />
          </S.Cross>
        </S.ModalHeader>
        <S.HeaderUnderLine />
        <S.ModalBodyWrapper>{children}</S.ModalBodyWrapper>
      </S.Modal>
    </>
  );
};
