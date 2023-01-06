import styled from "styled-components";

export const UploadButton = styled.button`
  height: 10em;
  width: 10em;
  border-radius: 50%;

  & > img {
    max-width: 30%;
    max-heigth: 30%;
    object-fit: contain;
  }
`;

export const InputFile = styled.input``;
