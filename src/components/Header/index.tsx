import * as S from "./styles";
import Logo from "../../assets/jardi-logo-trans.png";
import Login from "../../assets/login.png";
import { SearchBar } from "../SearchBar";

export function Header() {
  return (
    <S.Wrapper>
      <S.LogoTitleWrapper>
        <S.Logo>
          <img src={Logo} />
        </S.Logo>
        <S.StyledTitleLink to="home">JARDIPOTES</S.StyledTitleLink>
      </S.LogoTitleWrapper>
      <nav>
        <S.LinkWrapper>
          <S.StyledLink to="home">Jardins</S.StyledLink>
          <S.StyledLink to="rules">FAQ</S.StyledLink>
        </S.LinkWrapper>
      </nav>
      <SearchBar/>
      <S.StyledLink to="home">
        <S.StyledLogin>
          <img src={Login} />
        </S.StyledLogin>
      </S.StyledLink>
    </S.Wrapper>
  );
}
