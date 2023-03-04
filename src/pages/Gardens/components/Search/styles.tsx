import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e5b873;
  display: flex;
  justify-content: center;
`;

export const Search = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
`;

export const SearchInput = styled.input`
  border-radius: 50px;
  margin: 1em;
  border: 0px;
  text-align: center;

  :focus {
    outline: none;
  }
`;

