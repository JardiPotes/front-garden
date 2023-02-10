import { FC } from "react";
import { Avatar } from "./Avatar";
import { BioCard } from "./BioCard";
import * as S from "./styles";

interface UserInfoProps {
  user: {
    profile_image: string | null;
    nickname: string;
    experience: number;
    bio: string;
  };
}

export const UserInfo: FC<UserInfoProps> = ({
  user: { profile_image, nickname, experience, bio },
}) => (
  <S.Wrapper>
    <Avatar profile_image={profile_image} />
    <BioCard nickname={nickname} experience={experience} bio={bio} />
  </S.Wrapper>
);
