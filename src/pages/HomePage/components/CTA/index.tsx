import { useState } from "react";
import { Link } from "react-router-dom";

import DocImg from "../../../../assets/dog-icon.png";
import { Button } from "../../../../components/Buttons";
import { StyledLink } from "../../../../components/Header/styles";
import { SignUpModal } from "../../../../components/SignUpForm";
import useToken from "../../../../utils/useToken";
import { ButtonWordings, HomePageWordings } from "../../../../wordings";
import * as S from "./styles";

export const CTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { token } = useToken();

  return (
    <S.Wrapper>
      <S.Description>
        {token
          ? HomePageWordings.connected_description
          : HomePageWordings.description}
      </S.Description>
      <S.ButtonDogIconWrapper>
        {token ? (
          <Button>
            <S.ButtonLink to="gardens">
              {HomePageWordings.connected_cta}
            </S.ButtonLink>
          </Button>
        ) : (
          <Button onClick={(): void => setIsOpen(true)}>
            {ButtonWordings.join}
          </Button>
        )}
        <S.DogIcon>
          <img src={DocImg} />
        </S.DogIcon>
      </S.ButtonDogIconWrapper>
      {isOpen && <SignUpModal setIsOpen={setIsOpen} />}
    </S.Wrapper>
  );
};
