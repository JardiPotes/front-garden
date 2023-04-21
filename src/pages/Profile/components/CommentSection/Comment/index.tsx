import { FC } from "react";

import { Card } from "../../../../../components/Card";
import { Experience } from "../../../../../components/Experience";
import { Comment as IComment } from "../../..";
import * as S from "./styles";

interface CommentProps {
  comment: IComment;
}

interface AuthorInfoProps {
  author: CommentProps["comment"]["author"];
}

const AuthorInfo: FC<AuthorInfoProps> = ({
  author: { profile_image, experience },
}) => {
  return (
    <S.Stack>
      <S.Avatar src={profile_image} />
      <Experience experience={experience} />
    </S.Stack>
  );
};

export const Comment: FC<CommentProps> = ({ comment: { author, content } }) => (
  <S.Wrapper>
    <AuthorInfo author={author} />
    <Card style={{ maxWidth: "1000px", width: "100%" }}>
      <S.Name>{author.nickname}</S.Name>
      <p style={{ whiteSpace: "pre-wrap" }}>{content}</p>
    </Card>
  </S.Wrapper>
);
