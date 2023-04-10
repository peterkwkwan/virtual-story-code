import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  color: ${(props) => props.theme.palette.text01};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  ::before {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    content: '';
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 70%,
      rgba(37, 37, 38, 0.5) 75%,
      rgba(37, 37, 38, 1) 100%
    );
    pointer-events: none;
  }
`

export const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 80%;
  p {
    line-height: 28px;
    word-break: break-word;
  }
  figure {
    img {
      width: 100%;
      border: 2px solid grey;
    }
  }
  li {
    :not(:first-of-type) {
      margin-top: 12px;
    }
  }
`

export const StyledCaption = styled.figcaption`
  color: ${(props) => props.theme.palette.text02};
  text-align: center;
  font-size: 0.875rem;
`
