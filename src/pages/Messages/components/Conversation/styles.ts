import styled from "styled-components";

export const MessageWrapper = styled.div<{ $right: boolean }>`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$right ? "flex-end" : "flex-start")};
`;

export const MessageArea = styled.textarea`
  width: 100%;
  height: 50px;
`;
