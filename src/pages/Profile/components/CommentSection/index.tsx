import { FC } from "react";
import { SectionHeader } from "../SectionHeader";
import { Comment } from "./Comment";

import { faBug } from "@fortawesome/free-solid-svg-icons/faBug";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Comment {
  id: number;
  author: {
    nickname: string;
    profile_image: string;
    experience: number;
  };
  content: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

export const CommentSection: FC<CommentSectionProps> = ({ comments }) => {
  if (!comments || !comments.length) return null;

  return (
    <>
      <SectionHeader>Et les graines que j&apos;ai semées...</SectionHeader>
      {comments.map((comment, index) => (
        <>
          {!!index && (
            <FontAwesomeIcon
              icon={faBug}
              style={{ padding: "1em" }}
              opacity=".3"
            />
          )}
          <Comment comment={comment} />
        </>
      ))}
    </>
  );
};
