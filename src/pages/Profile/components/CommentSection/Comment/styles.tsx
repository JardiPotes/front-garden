import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
`;

export const Avatar = styled.img`
  width: 100px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 20px;
`;

export const Name = styled.span`
  font-size: large;
  font-weight: bold;
  margin: 0;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;
