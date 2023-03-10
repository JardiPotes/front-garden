import { useState } from "react";
import { FC } from "react";

import Logo from "../../assets/jardi-logo-trans.png";
import Login from "../../assets/login.png";
import useToken from "../../utils/useToken";
import { ButtonWordings } from "../../wordings";
import { Button } from "../Buttons";
import { LoginModal } from "../LoginForm";
import { LogOutButton } from "../LogOut";
import { SearchBar } from "../SearchBar";
import * as S from "./styles";

export const Header: FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const { token, setToken, removeToken } = useToken();
  const isLoggedIn = Boolean(token);
  const image = token ? "" : Login

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
          <LogOutButton removeToken={removeToken} token={token}/>
        ) : (
          <>
            <Button onClick={(): void => setIsLoginOpen(true)}>
              {ButtonWordings.connection}
            </Button>
          </>
        )} 
        <img src={Login} />
      </S.StyledLogin>
      {isLoginOpen && (
        <LoginModal setIsOpen={setIsLoginOpen} setToken={setToken} />
      )}
    </S.Wrapper>
  );
};
