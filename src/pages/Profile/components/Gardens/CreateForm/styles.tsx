import styled from "styled-components";

export const CenterElement = styled.div<{ flexDirection?: "column" | "row" }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }): string => flexDirection ?? "column"};
  align-items: center;
`;
