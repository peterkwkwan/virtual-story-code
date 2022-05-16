import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Consola';
    src: url(public/assets/fonts/CONSOLA.TTF); 
  }
  body {
    margin: 0;
    padding: 0;
    background: pink;
    font-family: Consola;
  }
`;
export default GlobalStyle;
