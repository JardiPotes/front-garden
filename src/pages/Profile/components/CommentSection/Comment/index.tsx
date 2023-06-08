import { FC } from "react";

import { Card } from "../../../../../Components/Card";
import { Experience } from "../../Experience";
import { Comment as IComment } from "../../..";
import * as S from "./styles";

interface CommentProps {
  comment: IComment;
}

interface AuthorInfoProps {
  author: CommentProps["comment"]["author"];
}

const AuthorInfo: FC<AuthorInfoProps> = ({
  author: { profile_image, experience }
}) => {
  return (
    <S.Stack>
      <S.Avatar src={profile_image} />
      <Experience experience={experience} />
    </S.Stack>
  );
};

export const Comment: FC<CommentProps> = ({
  comment: { author, content, created_at }
}) => (
  <S.Wrapper>
    <AuthorInfo author={author} />
    <Card style={{ maxWidth: "1000px", width: "100%" }}>
      <S.NameDatetimeWrapper>
        <S.Name>{author.nickname}</S.Name>
        <S.Datetime dateTime={created_at}>
          {new Intl.DateTimeFormat("fr-FR", {
            dateStyle: "long",
            timeStyle: "short",
            timeZone: "Europe/Paris"
          }).format(new Date(created_at))}
        </S.Datetime>
      </S.NameDatetimeWrapper>
      <p style={{ whiteSpace: "pre-wrap" }}>{content}</p>
    </Card>
  </S.Wrapper>
);
