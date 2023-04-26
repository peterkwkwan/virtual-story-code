import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  overflow: hidden;
`

const Dot = styled.span`
  position: relative;
  width: 40px;
  height: 40px;
  z-index: 2;
  display: inline-block;
  animation: initializeDots 2.5s ease;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(0.1);
    transition: all 2s;
    border-radius: 100%;
    user-select: none;
    background: ${(props) => props.theme.palette.vsCodeBlue};
    filter: brightness(10%);
    box-shadow: 0 0 10px ${(props) => props.theme.palette.vsCodeBlue},
      0 0 20px ${(props) => props.theme.palette.vsCodeBlue},
      0 0 40px ${(props) => props.theme.palette.vsCodeBlue},
      0 0 60px ${(props) => props.theme.palette.vsCodeBlue},
      0 0 80px ${(props) => props.theme.palette.vsCodeBlue},
      0 0 100px ${(props) => props.theme.palette.vsCodeBlue};
    animation: initializeDots 2.5s ease;
  }
  &:hover:before {
    filter: brightness(90%);
    transform: scale(0.3);
    transition: 0s;
  }
  @keyframes initializeDots {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

interface Props {
  dimensions: {
    height: number
    width: number
  }
}

export const Dots = ({ dimensions }: Props) => {
  const { height, width } = dimensions

  const totalArea = height * width
  const numberOfDots = totalArea / (40 * 40)

  const ALL_DOTS = []

  for (let i = 0; i < Math.floor(numberOfDots); i++) {
    ALL_DOTS.push(<Dot />)
  }

  return <Container>{ALL_DOTS}</Container>
}
