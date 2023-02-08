import { FC, useState, Dispatch, SetStateAction } from "react";
import * as S from "../ModalForm/styles";
import Logo from "../../assets/jardi-logo-trans.png";
import CrossIcon from "../../assets/cross-icon.png";
import { Button } from "../Buttons";
import { ModalFormWordings, ButtonWordings } from "../../wordings";
import { SignUpModal } from "../SignUpForm";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Modal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;
  return (
    isOpen && (
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
        <S.ModalBodyWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.email}</S.inputLabel>
            <S.ModalBodyInputBody
              placeholder="ilovecss@sarcasm.fr"
              value={email}
              onChange={(e): void => setEmail(e.target.value)}
            />
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.password}</S.inputLabel>
            <S.ModalBodyInputBody
              type="password"
              placeholder="********"
              value={password}
              onChange={(e): void => setPassword(e.target.value)}
            />
          </S.labelInputWrapper>
          <Button onClick={(): void => setIsCompleted(true)}>
            {ButtonWordings.continue}
          </Button>
        </S.ModalBodyWrapper>
        <SignUpModal
          isCompleted={isCompleted}
          setIsOpen={setIsOpen}
          email={email}
          password={password}
        />
      </S.Modal>
    )
  );
};
