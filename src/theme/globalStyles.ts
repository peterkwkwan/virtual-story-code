import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ isBlackNWhite: boolean }>`
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    background-color: #1e1e1e;
  }

  body aside, ul, span, a, img, button, .Avatar, .TopNav, .BaseContainer, .StarRating, #parallax-scroll-id {
    -webkit-filter: ${(props) =>
      props.isBlackNWhite ? 'grayscale(100%)' : ''};
   -moz-filter: ${(props) => (props.isBlackNWhite ? 'grayscale(100%)' : '')};
   filter: ${(props) => (props.isBlackNWhite ? 'grayscale(100%)' : '')};
  }
`
export default GlobalStyle
