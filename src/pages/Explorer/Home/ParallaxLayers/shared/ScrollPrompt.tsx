import React from 'react'
import styled from 'styled-components'

import { useBoundStore } from '@/hooks/useBoundStore'
import { Tracker } from '@/hooks/useIntersectionObserver'

export const Prompt = styled.div`
  bottom: 5%;
  position: absolute;
  width: 30px;
  height: 30px;
  transform: rotate(45deg);
  border-right: 2px #fff solid;
  border-bottom: 2px #fff solid;
  transition: transform 1s;
  &:before {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    top: 5%;
    left: 5%;
    border-right: 1px #fff solid;
    border-bottom: 1px #fff solid;
    animation: arrow 2s infinite;
  }
  @keyframes arrow {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(10px, 10px);
    }
  }
`

export const ScrollPrompt = () => {
  return <Prompt />
}
