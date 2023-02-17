import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  aspect-ratio: 1;
  border-radius: 20px;
`;

export const Name = styled.span`
  font-size: large;
  font-weight: bold;
  font-family: "Amiko";
  margin: 0;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;
