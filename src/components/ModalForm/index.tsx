import React from "react";
import { useState } from "react";
import * as S from "../ModalForm/styles";
import Logo from "../../assets/jardi-logo-trans.png";
import CrossIcon from "../../assets/cross-icon.png";
import { Button } from "../Buttons";

import { WORDINGS } from "./wordings";
export const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const clearModal = () => setIsOpen(false);

  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    isOpen && (
      <S.Modal>
        <S.ModalHeader>
          <S.LogoTitleWrapper>
            <S.Logo>
              <img src={Logo} />
            </S.Logo>
            <S.Title>{WORDINGS.headline}</S.Title>
          </S.LogoTitleWrapper>
          <S.Cross onClick={clearModal}>
            <img src={CrossIcon} />
          </S.Cross>
        </S.ModalHeader>
        <S.HeaderUnderLine></S.HeaderUnderLine>
        <S.ModalBodyWrapper>
          <S.ModalBodyInputBody placeholder="ilovecss@sarcasm.fr" onChange={handleChange} onSubmit={e => {
            e.preventDefault();
          }}></S.ModalBodyInputBody>
          <S.ModalBodyInputBody type= "password" placeholder="********" onChange={handleChange} onSubmit={e => {
            e.preventDefault();
          }}></S.ModalBodyInputBody>

          <Button></Button>
        </S.ModalBodyWrapper>
      </S.Modal>
    )
  );
};
