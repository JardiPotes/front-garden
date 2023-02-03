import { useState } from "react";
import * as S from "../ModalForm/styles";
import Logo from "../../assets/jardi-logo-trans.png";
import CrossIcon from "../../assets/cross-icon.png";
import { Button } from "../Buttons";
import { ModalFormWordings, ButtonWordings } from "../../wordings";
import { SignUpModal } from "../SignUpForm";

type ModalProps = {
  isOpen: boolean;
};

export const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
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
          <S.Cross onClick={() => setIsOpen(false)}>
            <img src={CrossIcon} />
          </S.Cross>
        </S.ModalHeader>
        <S.HeaderUnderLine></S.HeaderUnderLine>
        <S.ModalBodyWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.email}</S.inputLabel>
            <S.ModalBodyInputBody
              placeholder="ilovecss@sarcasm.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></S.ModalBodyInputBody>
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.password}</S.inputLabel>
            <S.ModalBodyInputBody
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></S.ModalBodyInputBody>
          </S.labelInputWrapper>
          <Button onClick={() => setIsCompleted(true)}>
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
