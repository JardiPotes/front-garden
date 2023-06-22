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

export const Layout = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  padding: 2em 1em;
`;
