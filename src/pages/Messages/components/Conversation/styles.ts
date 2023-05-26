import styled from "styled-components";

export const MessageWapper = styled.div<{ $right: boolean }>`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$right ? "flex-end" : "flex-start")};
`;
