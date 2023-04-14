import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fcf9f9;
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  margin: 50px;
  margin-inline: auto;
  gap: 20px;
  max-width: 80%;
  border-radius: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  align-items: flex-start;
  justify-content: space-between;
  flex: 2;
  gap: 4px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  max-height: 200px;
  flex: 1;
`;

export const Icon = styled.img`
  border-radius: 50px;
  height: 50px;
  width: 50px;
  object-fit: cover;
  object-position: 0 0;
`;

export const Address = styled.div`
  background-color: #e5b873;
  border-radius: 20px;
  align-self: flex-end;
  justify-self: flex-end;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 4px;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const Pin = styled.img`
  max-height: 20px;
  object-fit: contain;
`;
