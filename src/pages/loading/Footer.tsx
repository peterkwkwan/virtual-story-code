import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color: ${props => props.theme.palette.text01};
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    font-family: League Spartan;
    animation: fadeIn 1s linear;
    margin-bottom: 20px;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const VSCode = styled.a`
    margin:0;
    color: ${props => props.theme.palette.vsCodeBlue};
`

const Copyright = styled.p`
    margin: 0 0 0 8px;
`

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Container>
      <p>Inspired by <VSCode href='https://code.visualstudio.com/' target="_blank">Visual Studio Code</VSCode></p>.
      <Copyright>Copyright &copy; {currentYear} Peter Kwan.</Copyright>
    </Container>
  )
}
