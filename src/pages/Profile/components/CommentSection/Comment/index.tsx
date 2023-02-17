import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Card } from "../../../../../components/Card";

import * as S from "./styles";

interface Comment {
  id: number;
  author: {
    nickname: string;
    profile_image: string;
    experience: number;
  };
  content: string;
}

interface CommentProps {
  comment: Comment;
}

const AuthorInfo: FC<Pick<Comment, "author">> = ({
  author: { profile_image, experience },
}) => {
  return (
    <S.Stack>
      <S.Avatar src={profile_image} />
      <span>
        {Array.from({ length: experience }).map((_, i) => (
          <FontAwesomeIcon
            key={`experience-${i}`}
            icon={faSeedling}
            bounce
            style={{ padding: "0.2ch", animationIterationCount: 1 }}
          />
        ))}
      </span>
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
