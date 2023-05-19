import { faFrog } from "@fortawesome/free-solid-svg-icons/faFrog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { ReactPaginateProps } from "react-paginate";

import * as S from "./styles";

export const Pagination: FC<ReactPaginateProps> = (props) => {
  if (props.pageCount <= 1) {
    return null;
  }
  return (
    <S.ReactPaginate
      nextLabel={<FontAwesomeIcon icon={faFrog} />}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      previousLabel={<FontAwesomeIcon icon={faFrog} flip="horizontal" />}
      previousClassName="previous"
      nextClassName="next"
      breakLabel="..."
      breakClassName="break"
      containerClassName="pagination"
      activeClassName="active"
      disabledClassName="disabled"
      renderOnZeroPageCount={null}
      {...props}
    />
  );
};
