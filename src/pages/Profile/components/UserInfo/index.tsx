import { FC } from "react";
import { Avatar } from "./Avatar";
import { BioCard } from "./BioCard";
import * as S from "./styles";

interface UserInfoProps {
  user: {
    profileImage: string;
    nickname: string;
    experience: number;
    bio: string;
    location: string;
  };
}

export const UserInfo: FC<UserInfoProps> = ({
  user: { profileImage, location, nickname, experience, bio },
}) => (
  <S.Wrapper>
    <Avatar profileImage={profileImage} location={location} />
    <BioCard nickname={nickname} experience={experience} bio={bio} />
  </S.Wrapper>
);
