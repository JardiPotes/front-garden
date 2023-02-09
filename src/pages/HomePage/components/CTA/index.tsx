import { useState } from "react";
import { Button } from "../../../../components/Buttons";
import { HomePageWordings, ButtonWordings } from "../../../../wordings";
import DocImg from "../../../../assets/dog-icon.png";

import * as S from "./styles";
import { SignUpModal } from "../../../../components/SignUpForm";

export const CTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <S.Wrapper>
      <S.Description>{HomePageWordings.description}</S.Description>
      <S.ButtonDogIconWrapper>
        <Button onClick={() => setIsOpen(true)}>{ButtonWordings.join}</Button>
        <S.DogIcon>
          <img src={DocImg} />
        </S.DogIcon>
      </S.ButtonDogIconWrapper>
      {isOpen && <SignUpModal setIsOpen={setIsOpen} />}
    </S.Wrapper>
  );
};
