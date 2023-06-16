import styled from 'styled-components';

export const TransparentButton = styled.button`
  background-color: transparent;
  border: none;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    scale: 1.15;
  }
`;
