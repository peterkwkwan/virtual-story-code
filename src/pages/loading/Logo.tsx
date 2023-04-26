import React, { memo } from 'react'
import styled from 'styled-components'

const neonPink = '#fe05e1'

const LogoContainer = styled.div<{ isHoveringButton: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 200px;
  padding-top: 50px;
  font-family: League Spartan;
  overflow: hidden;
  transition: all 1s ease;
  animation: logoFadeIn 2s ease;
  user-select: none;
  @keyframes logoFadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }

    100% {
      opacity: 1;
    }
  }
`

const AnimatedLogo = styled.div`
  animation: elevate 2s ease;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  @keyframes elevate {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`
const StyledH1 = styled.h1`
  flex-grow: 1;
  font-family: League Spartan;
  text-align: center;
  object-fit: contain;
  font-weight: 200;
  font-size: 6rem;
  transition: all 1s ease;
  position: relative;
  margin: 0;
`

const StyledLetter = styled.span<{ isHoveringButton: boolean }>`
  font-weight: 500;
  z-index: 5;
  position: relative;
  display: inline-block;
  color: ${(props) => props.isHoveringButton && props.theme.palette.vsCodeBlue};
  transition: all 1s;
  animation: ${(props) => props.isHoveringButton && 'flip 1.5s infinite'};
  @keyframes flip {
    0%,
    80% {
      transform: rotateY(360deg);
    }
  }
`

const NeonSign = styled.span<{ isHoveringButton: boolean }>`
  display: block;
  font-family: 'Mr Dafoe';
  position: relative;
  font-size: 3rem;
  margin: 0;
  top: -24px;
  left: 10%;
  z-index: 5;
  width: fit-content;

  transition: all 1s ease;
  color: ${(props) =>
    props.isHoveringButton
      ? `${props.theme.palette.white}`
      : `${props.theme.palette.dark04}`};
  text-shadow: ${(props) =>
    props.isHoveringButton &&
    `0 0 0.05em #fff, 0 0 0.2em ${neonPink}, 0 0 0.3em ${neonPink}`};
  transform: rotate(-7deg);
  > span {
    font-size: 4rem;
  }
  ::after {
    z-index: 5;
    border-bottom: ${(props) =>
      props.isHoveringButton
        ? `4px solid ${neonPink}`
        : `4px solid ${props.theme.palette.white}`};
    position: absolute;
    left: ${(props) => (props.isHoveringButton ? '55%' : '48%')};
    bottom: 0;
    width: ${(props) => (props.isHoveringButton ? '90%' : '4px')};
    opacity: ${(props) => (props.isHoveringButton ? 1 : 0)};
    content: '';
    transition: all 1s ease;
    margin-left: ${(props) => (props.isHoveringButton ? '-50%' : 'unset')};
  }
`

const NameLetters = styled.span`
  position: relative;
  z-index: 5;
`

const By = styled.span`
  position: relative;
  z-index: 5;
  font-size: 1rem;
  display: block;
  margin-bottom: 8px;
  color: ${(props) => props.theme.palette.text02};
`

const Logo = ({ isHoveringButton }: { isHoveringButton: boolean }) => {
  return (
    <LogoContainer isHoveringButton={isHoveringButton}>
      <AnimatedLogo>
        <StyledH1>
          <NeonSign isHoveringButton={isHoveringButton}>
            <span>V</span>irtual&nbsp;&nbsp;<span>S</span>tory&nbsp;Code
          </NeonSign>
          <By>made by&nbsp;</By>
          <StyledLetter isHoveringButton={isHoveringButton}>P</StyledLetter>
          <NameLetters>eter</NameLetters>
          &nbsp;
          <StyledLetter isHoveringButton={isHoveringButton}>K</StyledLetter>
          <NameLetters>wan</NameLetters>
        </StyledH1>
      </AnimatedLogo>
    </LogoContainer>
  )
}

export default memo(Logo)
