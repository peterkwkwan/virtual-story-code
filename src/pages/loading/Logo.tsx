import React, { memo } from 'react'
import styled from 'styled-components'

const neonPink = '#fe05e1'

const LogoContainer = styled.div<{ isHoveringButton: boolean }>`
  position: relative;
  display: flex;
  width: 400px;
  height: 132px;
  font-family: League Spartan;
  margin-bottom: 0;
  overflow: hidden;
  transition: all 1s ease;
  animation: fadeInFast 1s ease;
  ::after {
    border-bottom: ${(props) =>
    props.isHoveringButton
      ? `4px solid ${props.theme.palette.vsCodeBlue}`
      : `4px solid ${props.theme.palette.text01}`};
    position: absolute;
    left: 50%;
    bottom: 0;
    width: ${(props) => (props.isHoveringButton ? '100%' : '4px')};
    opacity: 0;
    content: "";
    transition: all 1s ease;
    animation: fadeIn 1s ease;
    margin-left: ${(props) => (props.isHoveringButton ? '-50%' : 'unset')};
    animation-fill-mode: forwards;
  }
  @keyframes fadeInFast {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
  }
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

const AnimatedLogo = styled.div`
  animation: elevate 1s ease;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  @keyframes elevate {
    0% {
      transform: translateY(100px);
    }
    100% {
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
  font-size: 4rem;
  transition: all 1s ease;
  position: relative;
  margin: 0;
  z-index: 1;
`

const StyledLetter = styled.span<{ isHoveringButton: boolean }>`
    font-weight: 500;
    position: relative;
    display: inline-block;
    animation:  ${(props) => (props.isHoveringButton && 'flip 2s infinite')};
    @keyframes flip {
      0%,
      80% {
        transform: rotateY(360deg);
      }
    }
`

const NeonSign = styled.h2<{ isHoveringButton: boolean }>`
  font-family: 'Mr Dafoe';
  position: relative;
  font-size: 3rem;
  margin: 0;
  top: -24px;
  z-index: 0;
  transition: all 1s ease;
  color: ${props => (props.isHoveringButton ? `${props.theme.palette.white}` : `${props.theme.palette.dark04}`)};
  text-shadow: ${props => (props.isHoveringButton && `0 0 0.05em #fff, 0 0 0.2em ${neonPink}, 0 0 0.3em ${neonPink}`)} ;
  transform: rotate(-7deg);
  > span {
    font-size: 4rem;
  }
`

const Logo = ({ isHoveringButton }: { isHoveringButton: boolean }) => {
  return (
    <LogoContainer isHoveringButton={isHoveringButton}>
      <AnimatedLogo>
        <StyledH1>
          <StyledLetter isHoveringButton={isHoveringButton}>P</StyledLetter>eter Kwan&apos;s
        </StyledH1>
        <NeonSign isHoveringButton={isHoveringButton}><span>V</span>irtual <span>S</span>tory Code</NeonSign>
      </AnimatedLogo>
    </LogoContainer>
  )
}

export default memo(Logo)
