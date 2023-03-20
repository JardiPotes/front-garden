import { faBug } from "@fortawesome/free-solid-svg-icons/faBug";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, Fragment } from "react";

import { UserProfileWordings } from "../../../../wordings";
import { Comment as IComment } from "../..";
import { SectionHeader } from "../SectionHeader";
import { Comment } from "./Comment";

export interface CommentSectionProps {
  comments: IComment[];
}

export const CommentSection: FC<CommentSectionProps> = ({ comments }) => {
  if (!comments || !comments.length) return null;

  return (
    <>
      <SectionHeader>{UserProfileWordings.commentSectionHeader}</SectionHeader>
      {comments.map((comment, index) => (
        <Fragment key={comment.id}>
          {!!index && (
            <FontAwesomeIcon
              icon={faBug}
              style={{ padding: "1em" }}
              opacity=".3"
            />
          )}
          <Comment comment={comment} />
        </Fragment>
      ))}
    </>
  );
};
