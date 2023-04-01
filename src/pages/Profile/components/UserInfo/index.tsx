import { FC } from "react";

import { UserWithGardens } from "../..";
import { Avatar } from "./Avatar";
import { BioCard } from "./BioCard";
import * as S from "./styles";

export interface UserInfoProps {
  user: Pick<
    UserWithGardens,
    "profile_image" | "nickname" | "experience" | "bio"
  >;
}

export const UserInfo: FC<UserInfoProps> = ({
  user: { profile_image, nickname, experience, bio },
}) => (
  <S.Wrapper>
    <Avatar profile_image={profile_image} />
    <BioCard nickname={nickname} experience={experience} bio={bio} />
  </S.Wrapper>
);
