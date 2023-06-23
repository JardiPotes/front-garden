import styled from 'styled-components';

const Colors = {
  background: '#e6b873',
} as const;

export const SectionHeader = styled.h2`
  padding: 25px 15px;
  font-size: xx-large;
  background: ${Colors.background};
  width: 100%;
  text-align: center;
`;
