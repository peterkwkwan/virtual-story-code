import React, { memo } from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div<{isHoveringButton: boolean}>`
  position: relative;
  display: flex;
  width: 400px;
  height: 100px;
  font-family: League Spartan;
  margin-bottom: 0;
  overflow: hidden;
  ::after {
    border-bottom: ${(props) => (props.isHoveringButton ? '4px solid #289BE9' : `4px solid ${props.theme.palette.text01}`)};
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
    ::first-letter{
        font-weight: 600;
    }
`

const Logo = ({isHoveringButton} : {isHoveringButton:boolean}) => {
  return (
    <LogoContainer isHoveringButton={isHoveringButton}>
      <AnimatedLogo>
        <StyledH1>Peter Kwan</StyledH1>
      </AnimatedLogo>
    </LogoContainer>
  )
}

export default memo(Logo)

