import { faBug } from "@fortawesome/free-solid-svg-icons/faBug";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, Fragment, useState } from "react";
import { useQuery } from "react-query";

import { axios } from "../../../../ClientProvider";
import { UserProfileWordings } from "../../../../wordings";
import { Comment as IComment } from "../..";
import { SectionHeader } from "../SectionHeader";
import { Comment } from "./Comment";
import * as S from "./styles";

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

  if (!data) return null;

  const { results: comments, count, previous, next } = data;

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
      <S.ReactPaginate
        pageCount={Math.ceil(count / 10)}
        onPageChange={handlePageClick}
        nextLabel={next && ">"}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel={previous && "<"}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
};
