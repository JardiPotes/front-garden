import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import Logo from "../../assets/jardi-logo-trans.png";
import Login from "../../assets/login.png";
import { ButtonWordings } from "../../assets/wordings";
import useToken from "../../hooks/useToken";
import { getUser } from "../../utils/user";
import { Button } from "../Button";
import { LoginModal } from "../LoginForm";
import { LogOutButton } from "../LogOut";
import { SearchBar } from "../SearchBar";
import * as S from "./styles";

interface UserProfileLinkProps {
  isLoggedIn: boolean;
  userId: string;
  image: string;
  shouldRedirect: boolean;
  setShouldRedirect: Dispatch<SetStateAction<boolean>>;
}

const UserProfileLink: React.FC<UserProfileLinkProps> = ({
  isLoggedIn,
  userId,
  image
}) => {
  const userProfileLink = userId ? `/profile/${userId}` : "/";

  return isLoggedIn && userId ? (
    <>
      <S.ImageStyledLink href={userProfileLink}>
        <S.RoundImage src={image} />
      </S.ImageStyledLink>
      <S.StyledLink to={"/messages/0"} data-test-id="messages">
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ color: "#CEA37C", paddingRight: "2px" }}
          size="lg"
        />
        Messages
      </S.StyledLink>
    </>
  ) : (
    <S.RoundImage src={image} />
  );
};

export const Header: React.FC = () => {
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const { setToken, removeToken, token } = useToken();
  const user = getUser();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(Boolean(token && user));

  const image = isLoggedIn ? user?.profile_image : Login;

  useEffect(() => {
    setIsLoggedIn(Boolean(token && user));
  }, [shouldRedirect, token, user]);

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
          <S.StyledLink to="gardens" data-test-id="garden_link">
            Jardins
          </S.StyledLink>
          <S.StyledLink to="intro">Présentation</S.StyledLink>
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
              shouldRedirect={shouldRedirect}
              setShouldRedirect={setShouldRedirect}
            />
          </>
        ) : (
          <>
            <Button
              onClick={(): void => setIsLoginOpen(true)}
              data-test-id="connexion_button"
            >
              {ButtonWordings.connection}
            </Button>
            <S.RoundImage src={image} />
          </>
        )}
      </S.StyledLogin>
      {isLoginOpen && (
        <LoginModal
          setIsOpen={setIsLoginOpen}
          setToken={setToken}
          setShouldRedirect={setShouldRedirect}
        />
      )}
    </S.Wrapper>
  );
};
