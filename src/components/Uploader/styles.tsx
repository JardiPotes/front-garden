import styled from "styled-components";

export const UploadButton = styled.button`
  height: 10em;
  width: 10em;
  border-radius: 50%;

  & > img {
    max-width: 30%;
    max-height: 30%;
    object-fit: contain;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 2em;
  gap: 1em;
  justify-content: flex-start;
  width: 100%;
`;
