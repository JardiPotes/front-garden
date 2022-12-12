import { createGlobalStyle } from 'styled-components';

const Colors = {
    "bg": '#FAF0E6',
    "txt": "black",

} as const

export const GlobalStyle = createGlobalStyle `
body {
    margin: 0;
    padding: 0; 
    background-color: ${Colors.bg};
    font-family: Amiko
}
`; 

