import { FC } from "react";

import { UserProfileWordings } from "../../../../../assets/wordings";
import { Card } from "../../../../../Components/Card";
import { Experience } from "../../Experience";
import { UserInfoProps } from "..";
import * as S from "./styles";

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
