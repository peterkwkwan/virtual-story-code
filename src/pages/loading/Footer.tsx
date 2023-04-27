import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  color: ${(props) => props.theme.palette.text01};
  font-family: League Spartan;
  bottom: 0;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  user-select: none;
  animation: footerFadeIn 1s linear;
  @keyframes footerFadeIn {
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
  position: relative;
  z-index: 5;
  margin: 0;
  color: ${(props) => props.theme.palette.vsCodeBlue};
`

const Copyright = styled.p`
  margin: 0 0 0 8px;
`

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <p>
        Inspired by{' '}
        <VSCode href="https://code.visualstudio.com/" target="_blank">
          Visual Studio Code
        </VSCode>
      </p>
      .<Copyright>Copyright &copy; {currentYear} Peter Kwan.</Copyright>
    </Container>
  )
}
