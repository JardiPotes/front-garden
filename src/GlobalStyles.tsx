import { createGlobalStyle } from "styled-components";

import Amiko from "./fonts/Amiko-Regular.ttf";

const Colors = {
  bg: "#FAF0E6",
  txt: "black",
  TitleCard: "#86E7B8",
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
}

#root {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Amiko;
}
`;
