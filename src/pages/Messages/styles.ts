import styled from "styled-components";

export const PreviewWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ConvWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2.5;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 1.5rem;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1.2rem;
  }
`;
