import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Consola';
    src: url(public/assets/fonts/CONSOLA.TTF); 
  }
  body {
    font-family: Consola;
    padding: 0;
    margin: 0;
  }

`;
export default GlobalStyle;
