import { useEffect, useState } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/jardi-logo-trans.png";
import Login from "../../assets/login.png";
import { getUser } from "../../utils/user";
import useToken from "../../utils/useToken";
import { ButtonWordings } from "../../wordings";
import { Button } from "../Buttons";
import { LoginModal } from "../LoginForm";
import { LogOutButton } from "../LogOut";
import { SearchBar } from "../SearchBar";
import * as S from "./styles";

interface UserProfileLinkProps {
  isLoggedIn: boolean;
  userId: string;
  image: string;
}

export const Header: FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const { token, setToken, removeToken } = useToken();
  const user = getUser();
  const isLoggedIn = Boolean(token && user);
  const image = isLoggedIn ? user?.profile_image : Login;
  const UserProfileLink: React.FC<UserProfileLinkProps> = ({
    isLoggedIn,
    userId,
    image,
  }) => {
    const navigate = useNavigate();
    const userProfileLink = `/profile/${userId}`;

    useEffect(() => {
      if (!isLoginOpen && isLoggedIn) {
        navigate(userProfileLink);
      }
    }, [isLoginOpen, isLoggedIn, navigate, userProfileLink]);
    return isLoggedIn ? (
      <S.ImageStyledLink href={userProfileLink}>
        <S.RoundImage src={image} />
      </S.ImageStyledLink>
    ) : (
      <S.RoundImage src={image} />
    );
  };
  return (
    <S.Wrapper>
      <S.LogoTitleWrapper>
        <S.Logo>
          <img src={Logo} />
        </S.Logo>
        <S.StyledTitleLink to="/">JARDIPOTES</S.StyledTitleLink>
      </S.LogoTitleWrapper>
      <nav>
        <S.LinkWrapper>
          <S.StyledLink to="gardens">Jardins</S.StyledLink>
          <S.StyledLink to="rules">FAQ</S.StyledLink>
        </S.LinkWrapper>
      </nav>
      <SearchBar />
      <S.StyledLogin>
        {isLoggedIn ? (
          <>
            <LogOutButton removeToken={removeToken} token={token} />
            <UserProfileLink
              isLoggedIn={isLoggedIn}
              userId={user.id}
              image={user?.profile_image || Login}
            />
          </>
        ) : (
          <>
            <Button onClick={(): void => setIsLoginOpen(true)}>
              {ButtonWordings.connection}
            </Button>
            <S.RoundImage src={image} />
          </>
        )}
      </S.StyledLogin>
      {isLoginOpen && (
        <LoginModal setIsOpen={setIsLoginOpen} setToken={setToken} />
      )}
    </S.Wrapper>
  );
};
