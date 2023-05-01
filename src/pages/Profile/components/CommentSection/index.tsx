import { faBug } from "@fortawesome/free-solid-svg-icons/faBug";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, Fragment, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { axios } from "../../../../ClientProvider";
import { Pagination } from "../../../../components/Pagination";
import { UserProfileWordings } from "../../../../wordings";
import { Comment as IComment } from "../..";
import { SectionHeader } from "../SectionHeader";
import { Comment } from "./Comment";
import useToken from "../../../../utils/useToken";

export interface CommentSectionProps {
  userId: string;
}

export const CommentSection: FC<CommentSectionProps> = ({ userId }) => {
  const [offset, setOffset] = useState(0);
  const handlePageClick = (event: { selected: number }): void => {
    const newOffset = (event.selected * 10) % count;
    setOffset(newOffset);
  };

  const { data: { data } = {} } = useQuery(
    ["comments", userId, offset],
    async () =>
      axios.get<{
        results: IComment[];
        count: number;
        previous: string | null;
        next: string | null;
      }>("comments", {
        params: { receiver_id: userId, offset },
      }),
    {
      keepPreviousData: true,
    }
  );

  const postNewCommentMutation = useMutation(
    async (newComment: {
      author_id: string;
      receiver_id: string;
      content: string;
    }) =>
      axios
        .post("comments", newComment, {
          headers: { Authorization: `Token ${token}` },
        })
        .then((res) => res.data)
  );

  const { token } = useToken();

  if (!data) return null;

  const { results: comments, count } = data;

  if (!comments || !comments.length) return null;

  return (
    <>
      <SectionHeader>{UserProfileWordings.commentSectionHeader}</SectionHeader>
      <Pagination
        pageCount={Math.ceil(count / 10)}
        onPageChange={handlePageClick}
      />
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
      <button
        onClick={() => {
          postNewCommentMutation.mutate({
            author_id: userId,
            receiver_id: userId,
            content: "Blue monkey yellow fire",
          });
        }}
      >
        click
      </button>
      <Pagination
        pageCount={Math.ceil(count / 10)}
        onPageChange={handlePageClick}
      />
    </>
  );
};
