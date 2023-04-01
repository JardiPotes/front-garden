import { FC } from "react";

import { UserInfoProps } from "..";
import * as S from "./styles";

type AvatarProps = Pick<UserInfoProps["user"], "profile_image">;

export const Avatar: FC<AvatarProps> = ({ profile_image }) => (
  <S.Avatar src={profile_image} />
);
