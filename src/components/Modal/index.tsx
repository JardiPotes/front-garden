import * as S from "./styles";
import CrossIcon from "../../assets/cross-icon.png";
import Logo from "../../assets/jardi-logo-trans.png";
import { ModalFormWordings } from "../../wordings";

type ModalHeaderProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({ setIsOpen }) => {
  return (
    <>
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
    </>
  );
};
