import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { UserProfileWordings } from "../../../../../wordings";
import * as S from "./styles";

interface BioCardProps {
  nickname: string;
  experience: number;
  bio: string;
}

export const BioCard: FC<BioCardProps> = ({ nickname, bio, experience }) => (
  <S.Wrapper>
    <S.Title>{nickname}</S.Title>
    <S.Experience>
      {UserProfileWordings.experience}{" "}
      {new Array(experience).fill(0).map((_, i) => (
        <FontAwesomeIcon key={`experience-${i}`} icon={faSeedling} />
      ))}
    </S.Experience>
    <span>{bio}</span>
  </S.Wrapper>
);
