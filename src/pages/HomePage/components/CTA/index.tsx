import { useState } from "react";

import DocImg from "../../../../assets/dog-icon.png";
import { Button } from "../../../../components/Buttons";
import { SignUpModal } from "../../../../components/SignUpForm";
import { ButtonWordings, HomePageWordings } from "../../../../wordings";
import * as S from "./styles";

export const CTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <S.Wrapper>
      <S.Description>{HomePageWordings.description}</S.Description>
      <S.ButtonDogIconWrapper>
        <Button onClick={(): void => setIsOpen(true)}>
          {ButtonWordings.join}
        </Button>
        <S.DogIcon>
          <img src={DocImg} />
        </S.DogIcon>
      </S.ButtonDogIconWrapper>
      {isOpen && <SignUpModal setIsOpen={setIsOpen} />}
    </S.Wrapper>
  );
};
