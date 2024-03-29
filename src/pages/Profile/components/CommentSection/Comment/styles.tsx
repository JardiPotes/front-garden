import styled from 'styled-components';

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

export const Datetime = styled.time`
  font-size: small;
  opacity: 75%;
`;

export const NameDatetimeWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;
