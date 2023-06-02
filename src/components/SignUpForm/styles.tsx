import styled from "styled-components";

export const CenterElement = styled.div<{ $fit: boolean }>`
  width: ${(props): string => (props.$fit ? "auto" : "100%")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
