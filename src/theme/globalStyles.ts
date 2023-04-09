import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ isBlackNWhite: boolean }>`
  body {
    font-family: Menlo, Monaco, "Courier New", monospace;
    padding: 0;
    margin: 0;
  }

  body aside, ul, a, img, button, .Avatar, .TopNav, .BaseContainer, .StarRating, #parallax-scroll-id {
    -webkit-filter: ${(props) =>
      props.isBlackNWhite ? 'grayscale(100%)' : ''};
   -moz-filter: ${(props) => (props.isBlackNWhite ? 'grayscale(100%)' : '')};
   filter: ${(props) => (props.isBlackNWhite ? 'grayscale(100%)' : '')};
  }
`
export default GlobalStyle
