import { FC } from "react";
import * as S from "./styles";

interface BioCardProps {
  nickname: string;
  experience: number;
  bio: string;
}

export const BioCard: FC<BioCardProps> = ({ nickname, bio, experience }) => (
  <S.Wrapper>
    <h1>{nickname}</h1>
    <p>{experience}</p>
    <span>{bio}</span>
  </S.Wrapper>
);
