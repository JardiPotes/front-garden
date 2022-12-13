import React from "react";
import { useState } from "react";
import * as S from "../SignUpForm/styles";
import Logo from "../../assets/jardi-logo-trans.png";
import CrossIcon from "../../assets/cross-icon.png";
import { Button } from "../Buttons";
import { ModalFormWordings, ButtonWordings } from "../../wordings";
import { Uploader } from "../Uploader";

export const SignUpModal = ({ isOpen, setIsOpen }) => {
  const [text, setText] = useState("");
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(event.target.value);
  };
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
          <S.ModalBodyInputBody
            placeholder="Huguette-JMiche"
            onChange={handleChange}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          ></S.ModalBodyInputBody>
          <S.ModalBodyTextAreaBody
            placeholder="J'aimerais bien vous inviter à faire une raclette dans mon jardin situé Paris 16ème arrondissement quand il fait 50 degrés."
            onChange={handleChange}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          ></S.ModalBodyTextAreaBody>
          <Uploader />
          <Button>{ButtonWordings.join}</Button>
        </S.ModalBodyWrapper>
      </S.Modal>
    )
  );
};
