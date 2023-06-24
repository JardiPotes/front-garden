import {faBug} from '@fortawesome/free-solid-svg-icons/faBug';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FC, Fragment, useState} from 'react';
import {useQuery} from 'react-query';

import {UserProfileWordings} from '@/assets/wordings';
import {axios} from '@/ClientProvider';
import {Pagination} from '@/components/Pagination';

import {Comment as IComment} from '../..';
import {SectionHeader} from '../SectionHeader';
import {Comment} from './Comment';
import {StyledCommentForm} from './Form';

export interface CommentSectionProps {
  userId: string;
}

export const CommentSection: FC<CommentSectionProps> = ({userId}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const handlePageClick = (event: {selected: number}): void => {
    const newOffset = (event.selected * 10) % count;
    setOffset(newOffset);
    setCurrentPage(event.selected);
  };

  const {data: {data} = {}, refetch} = useQuery(
    ['comments', userId, offset],
    async () =>
      axios.get<{
        results: IComment[];
        count: number;
        previous: string | null;
        next: string | null;
      }>('comments', {
        params: {receiver_id: userId, offset},
      }),
    {
      keepPreviousData: true,
    },
  );

  if (!data) return null;

  const {results: comments, count} = data;

  return (
    <>
      <SectionHeader>{UserProfileWordings.commentSectionHeader}</SectionHeader>
      {!!comments.length && (
        <>
          <Pagination
            pageCount={Math.ceil(count / 10)}
            onPageChange={handlePageClick}
            forcePage={currentPage}
          />
          {comments.map((comment, index) => (
            <Fragment key={comment.id}>
              {!!index && (
                <FontAwesomeIcon
                  icon={faBug}
                  style={{padding: '1em'}}
                  opacity=".3"
                />
              )}
              <Comment comment={comment} />
            </Fragment>
          ))}
          <Pagination
            pageCount={Math.ceil(count / 10)}
            onPageChange={handlePageClick}
            forcePage={currentPage}
          />
        </>
      )}
      <StyledCommentForm // eslint-disable-next-line @typescript-eslint/no-misused-promises
        triggerRefetch={refetch}
        userId={userId}
      />
    </>
  );
};
