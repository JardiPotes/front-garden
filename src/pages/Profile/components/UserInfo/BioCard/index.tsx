import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

import { Card } from "../../../../../components/Card";
import { UserProfileWordings } from "../../../../../wordings";
import { UserInfoProps } from "..";
import * as S from "./styles";

type BioCardProps = Pick<
  UserInfoProps["user"],
  "nickname" | "bio" | "experience"
>;

export const BioCard: FC<BioCardProps> = ({ nickname, bio, experience }) => (
  <Card style={{ width: "100%" }}>
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
