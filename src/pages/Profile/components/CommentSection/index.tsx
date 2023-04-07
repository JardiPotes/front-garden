import { faBug } from "@fortawesome/free-solid-svg-icons/faBug";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, Fragment } from "react";
import { useQuery } from "react-query";

import { axios } from "../../../../ClientProvider";
import { UserProfileWordings } from "../../../../wordings";
import { Comment as IComment } from "../..";
import { SectionHeader } from "../SectionHeader";
import { Comment } from "./Comment";

export interface CommentSectionProps {
  userId: string;
}

export const CommentSection: FC<CommentSectionProps> = ({ userId }) => {
  const { data: { data } = {} } = useQuery(
    ["comments", userId],
    async () =>
      axios.get<{ results: IComment[] }>("comments", {
        params: { receiver_id: userId },
      }),
    {
      keepPreviousData: true,
    }
  );

  if (!data) return null;

  const { results: comments } = data;

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
