import { createGlobalStyle } from "styled-components";

const Colors = {
  bg: "#FAF0E6",
  txt: "black",
  TitleCard: "#86E7B8",
} as const;

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0; 
    background-color: ${Colors.bg};
    font-family: Amiko;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
`;

