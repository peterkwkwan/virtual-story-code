import React from 'react'
import styled from 'styled-components'

import { IDENTITY } from '../shared/constants'

import { useStore } from '@/hooks/useStore'

type MarioProps = {
  triggerFirstTransform: boolean
  triggerSecondTransform: boolean
  triggerThirdTransform: boolean
  speechBubbleVisible: boolean
}

const Mario = styled.img<MarioProps>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100px;
  width: 100px;
  right: ${(props) => props.triggerFirstTransform && '20%'};
  top: ${(props) => props.triggerFirstTransform && '20%'};
  right: ${(props) => props.triggerSecondTransform && '40%'};
  top: ${(props) => props.triggerSecondTransform && '40%'};
  right: ${(props) => props.triggerThirdTransform && '60%'};
  top: ${(props) => props.triggerThirdTransform && '60%'};
  right: ${(props) => props.speechBubbleVisible && '80%'};
  top: ${(props) => props.speechBubbleVisible && '80%'};
  transition: all 2s;
  z-index: 5;
  cursor: pointer;
  pointer-events: all;
  &:hover {
    filter: drop-shadow(0px 0px 4px #fff);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`
interface Props {
  handleShowSpeechBubble: () => void
}

export const MovingMario = ({ handleShowSpeechBubble }: Props) => {
  const visibility = useStore((state) => state.visibility)

  const triggerFirstTransform = visibility[IDENTITY.EAT]
  const triggerSecondTransform = visibility[IDENTITY.SLEEP]
  const triggerThirdTransform = visibility[IDENTITY.CODE]
  const speechBubbleVisible = visibility['speechBubbleStart']
  const props = {
    triggerFirstTransform,
    triggerSecondTransform,
    triggerThirdTransform,
    speechBubbleVisible,
  }

  const getSvgPath = () => {
    if (triggerFirstTransform && !triggerSecondTransform) {
      return '/assets/images/home/fallingMario1.svg'
    }
    if (triggerSecondTransform && !triggerThirdTransform) {
      return '/assets/images/home/fallingMario2.svg'
    }
    if (triggerThirdTransform) {
      return '/assets/images/home/fallingMario3.svg'
    }
    if (speechBubbleVisible) {
      return '/assets/images/home/faintedmario.svg'
    }
    return '/assets/images/home/marioInSpace.svg'
  }

  return (
    <Mario {...props} src={getSvgPath()} onClick={handleShowSpeechBubble} />
  )
}
