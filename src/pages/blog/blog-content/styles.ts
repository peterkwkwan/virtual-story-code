import styled from 'styled-components'

export const Container = styled.div`
  color: ${(props) => props.theme.palette.text01};
  margin: 0 auto;
  max-width: 80%;
  font-family: 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;

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
