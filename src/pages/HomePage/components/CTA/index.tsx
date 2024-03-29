import {useState} from 'react';

import DocImg from '@/assets/dog-icon.png';
import {ButtonWordings, HomePageWordings} from '@/assets/wordings';
import {Button} from '@/components/Button';
import {SignUpModal} from '@/components/SignUpForm';
import useToken from '@/hooks/useToken';

import * as S from './styles';

export const CTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {token} = useToken();

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
          <Button
            onClick={(): void => setIsOpen(true)}
            data-test-id="register_button">
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
