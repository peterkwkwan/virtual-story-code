import React, { memo } from 'react'
import styled from 'styled-components'

import { Dots } from './Dots'

import useWindowDimensions from '@/hooks/useWindowDimensions'

const Container = styled.div<{ showLoadingPage: boolean }>`
  position: absolute;
  top: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.palette.dark01};
  display: flex;
  max-height: 100vh;
  height: 100vh;
  width: 100vw;
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
      display: 'none';
    }
  }
`

interface Props {
  showLoadingPage: boolean
  children: React.ReactNode
}

const Background = ({ showLoadingPage, children }: Props) => {
  const dimensions = useWindowDimensions()

  return (
    <Container showLoadingPage={showLoadingPage}>
      <Dots dimensions={dimensions} />
      {children}
    </Container>
  )
}

export default memo(Background)
