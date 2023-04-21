import UnstyledReactPaginate from "react-paginate";
import styled from "styled-components";

export const ReactPaginate = styled(UnstyledReactPaginate)`
  margin-block: 2rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;

  & li a {
    display: inline-block;
    text-align: center;
    border-radius: 50px;
    padding: 0.4rem;
    cursor: pointer;
    min-width: fit-content;
    width: 20px;
  }

  & li.active a {
    background-color: #e6b873;
  }
  & li.disabled a {
    color: grey;
  }
  & li.disabled,
  li.disabled a {
    cursor: default;
  }
`;
