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
  @font-face {
    font-family: 'SF-Pro';
    src: url(/assets/fonts/SF-Pro.ttf); 
  }
  body {
    font-family: Menlo, Monaco, "Courier New", monospace;
    padding: 0;
    margin: 0;
  }

`;
export default GlobalStyle;
