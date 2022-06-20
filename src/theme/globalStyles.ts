import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Consola';
    src: url(/assets/fonts/CONSOLA.TTF); 
  }
  @font-face {
    font-family: 'Menlo';
    src: url(/assets/fonts/Menlo.ttf); 
  }
  body {
    font-family: Menlo, Monaco, "Courier New", monospace;
    padding: 0;
    margin: 0;
  }

`;
export default GlobalStyle;
