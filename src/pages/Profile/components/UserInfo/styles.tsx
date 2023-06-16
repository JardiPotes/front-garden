import styled from 'styled-components';

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
