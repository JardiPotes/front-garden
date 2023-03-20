import { FC } from "react";

import { Card } from "../../../../../components/Card";
import { Experience } from "../../../../../components/Experience";
import { UserInfoProps } from "..";
import * as S from "./styles";
import { UserProfileWordings } from "../../../../../wordings";

type BioCardProps = Pick<
  UserInfoProps["user"],
  "nickname" | "bio" | "experience"
>;

export const BioCard: FC<BioCardProps> = ({ nickname, bio, experience }) => (
  <Card style={{ width: "100%" }}>
    <S.Title>{nickname}</S.Title>
    <Experience
      experience={experience}
      wording={UserProfileWordings.experience}
    />
    <S.Bio>{bio}</S.Bio>
  </Card>
);
