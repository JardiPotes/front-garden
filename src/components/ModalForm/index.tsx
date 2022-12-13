import React from "react";
import { useState } from "react";
import * as S from "../ModalForm/styles";
import Logo from "../../assets/jardi-logo-trans.png";
import CrossIcon from "../../assets/cross-icon.png";
import { Button } from "../Buttons";
import {ModalFormWordings, ButtonWordings} from '../../wordings'


export const Modal = ({isOpen, setIsOpen}) => {
  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  if (!isOpen) return null
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
          <S.ModalBodyInputBody placeholder="ilovecss@sarcasm.fr" onChange={handleChange} onSubmit={e => {
            e.preventDefault();
          }}></S.ModalBodyInputBody>
          <S.ModalBodyInputBody type= "password" placeholder="********" onChange={handleChange} onSubmit={e => {
            e.preventDefault();
          }}></S.ModalBodyInputBody>

          <Button>{ButtonWordings.continue}</Button>
        </S.ModalBodyWrapper>
      </S.Modal>
    )
  );
};
