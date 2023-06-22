import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

import Amiko from './assets/fonts/Amiko-Regular.ttf';

const Colors = {
  bg: '#FAF0E6',
  txt: 'black',
  TitleCard: '#86E7B8',
} as const;

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Amiko;
  src: url(${Amiko});
}

body {
  margin: 0;
  padding: 0; 
  background-color: ${Colors.bg};

  @media (max-width: 480px) {
    font-size: 14px;
  }
}

#root {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Amiko;
}

button:hover {
  cursor: pointer;
}
`;

export const CenterElement = styled.div<{
  flexDirection?: 'column' | 'row';
  $fit?: boolean;
}>`
  width: ${(props): string => (props.$fit ? 'auto' : '100%')};
  display: flex;
  flex-direction: ${({flexDirection}): string => flexDirection ?? 'column'};
  align-items: center;
`;

export const BREAKPOINTS = {mobile: 0, tablet: 768, desktop: 1280};
