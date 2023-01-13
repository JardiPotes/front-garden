import React from "react";
import { useState } from "react";
import * as S from "../SignUpForm/styles";
import Logo from "../../assets/jardi-logo-trans.png";
import CrossIcon from "../../assets/cross-icon.png";
import { Button } from "../Buttons";
import { ModalFormWordings, ButtonWordings } from "../../wordings";
import { Uploader } from "../Uploader";

export const SignUpModal = ({ isCompleted, setIsCompleted, isOpen, setIsOpen }) => {
  const [text, setText] = useState("");

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(event.target.value);
  };
  if (!isCompleted) return null;
  return (
    isCompleted && (
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
        <S.inputLabel>{ModalFormWordings.pseudo}</S.inputLabel>
          <S.ModalBodyInputBody
            placeholder="Huguette-JMiche"
            onChange={handleChange}
            onSubmit={(e) => {
              e.preventDefault();
            }}
         />
          </S.labelInputWrapper>
           <S.labelInputWrapper>
          <S.inputLabel>{ModalFormWordings.bio}</S.inputLabel>
          <S.ModalBodyTextAreaBody
            placeholder="J'aimerais bien vous inviter à faire une raclette dans mon jardin situé Paris 16ème arrondissement quand il fait 50 degrés."
            onChange={handleChange}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          />
           </S.labelInputWrapper>
          {/* <Uploader /> */}
          <S.hasGardenWrapper>
            <S.inputLabel>{ModalFormWordings.haveGarden}</S.inputLabel>
            <S.inputLabel>oui</S.inputLabel>
          <S.hasGardenInput type="radio" name= "hasGarden" id="oui" value="true" />
          <S.inputLabel>non</S.inputLabel>
          <S.hasGardenInput type="radio" name="hasGarden" id ="non" value="false" />
          </S.hasGardenWrapper>
          <Button>{ButtonWordings.join}</Button>
        </S.ModalBodyWrapper>
      </S.Modal>
    )
  );
};
