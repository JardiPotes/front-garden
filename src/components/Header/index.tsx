import { useEffect, useState } from "react";
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

interface HeaderProps {
  token: string;
}

const UserProfileLink: React.FC<UserProfileLinkProps> = ({
  isLoggedIn,
  userId,
  image
}) => {
  const [hasRedirected, setHasRedirected] = useState<boolean>(false);
  const navigate = useNavigate();
  const userProfileLink = userId ? `/profile/${userId}` : "/";
  useEffect(() => {
    if (isLoggedIn && !hasRedirected) {
      setHasRedirected(true);
      navigate(userProfileLink);
    }
  }, [isLoggedIn, navigate, userProfileLink]);
  return isLoggedIn && userId ? (
    <S.ImageStyledLink href={userProfileLink}>
      <S.RoundImage src={image} />
    </S.ImageStyledLink>
  ) : (
    <S.RoundImage src={image} />
  );
};

export const Header: React.FC<HeaderProps> = ({ token }) => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const { setToken, removeToken } = useToken();
  const user = getUser();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(Boolean(token && user));

  const image = isLoggedIn ? user?.profile_image : Login;

  useEffect(() => {
    setIsLoggedIn(Boolean(token && user));
  }, [token, user]);

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
              userId={user?.id || ""}
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
