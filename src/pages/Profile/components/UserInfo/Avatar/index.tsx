import { FC } from "react";
import * as S from "./styles";

interface AvatarProps {
  profileImage: string;
  location: string;
}

export const Avatar: FC<AvatarProps> = ({ profileImage, location }) => (
  <S.Wrapper>
    <S.Avatar src={profileImage} />
    <S.Location>{location}</S.Location>
  </S.Wrapper>
);
