import React, { memo } from 'react'
import styled from 'styled-components'

const Container = styled.div<{ showLoadingPage: boolean }>`
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.palette.dark01};
  display: flex;
  max-height: 100vh;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${(props) => !props.showLoadingPage && 'switchPage 3s forwards'};
  -webkit-animation: ${(props) =>
    !props.showLoadingPage && 'switchPage 3s forwards'};
  @keyframes switchPage {
    10% {
      transform: scale(1, 0.005);
      opacity: 1;
    }
    50% {
      transform: scale(0.5, 0.002);
    }
    100% {
      transform: scale(0.2, 0.002);
      opacity: 0;
      z-index: -1;
      display: 'none';
    }
  }
`

interface Props {
  showLoadingPage: boolean
}

const Background = ({ showLoadingPage }: Props) => {
  return <Container showLoadingPage={showLoadingPage}></Container>
}

export default memo(Background)
