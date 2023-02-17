import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { UserProfileWordings } from "../../../../../wordings";
import * as S from "./styles";
import { Card } from "../../../../../components/Card";

interface BioCardProps {
  nickname: string;
  experience: number;
  bio: string;
}

export const BioCard: FC<BioCardProps> = ({ nickname, bio, experience }) => (
  <Card>
    <S.Title>{nickname}</S.Title>
    <S.Experience>
      {UserProfileWordings.experience}{" "}
      {Array.from({ length: experience }).map((_, i) => (
        <FontAwesomeIcon
          key={`experience-${i}`}
          icon={faSeedling}
          bounce
          style={{ padding: "0.2ch", animationIterationCount: 1 }}
        />
      ))}
    </S.Experience>
    <S.Bio>{bio}</S.Bio>
  </Card>
);
