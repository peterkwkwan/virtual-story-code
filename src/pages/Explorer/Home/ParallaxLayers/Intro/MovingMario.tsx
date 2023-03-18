import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IParallax } from '@react-spring/parallax'

import { IDENTITY } from '../shared/constants'

import { useStore } from '@/hooks/useStore'

type MarioProps = {
  triggerFirstTransform: boolean
  triggerSecondTransform: boolean
  triggerThirdTransform: boolean
  speechBubbleVisible: boolean
  offset: number
}

const Mario = styled.img<MarioProps>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100px;
  width: 100px;
  right: ${(props) => props.offset}%;
  top: ${(props) => props.offset}%;
  transition: transform 1s;
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
  handleshowspeechbubble: () => void
  parallax: React.RefObject<IParallax>
  numberOfPages: number
  speechBubbleStart: number
}

export const MovingMario = ({
  handleshowspeechbubble,
  parallax,
  numberOfPages,
  speechBubbleStart,
}: Props) => {
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

  const [offsetPercentage, setOffsetPercentage] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      if (parallax.current) {
        const percentage =
          (parallax.current.current /
            ((scrollHeight / numberOfPages) * speechBubbleStart)) *
          100

        if (percentage <= 85) setOffsetPercentage(percentage)
      }
    }
    const container = document.getElementById('parallax-scroll-id')
    const scrollHeight = container?.scrollHeight || 0
    container?.addEventListener('scroll', handleScroll)
    return () => {
      container?.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
    <Mario
      {...props}
      src={getSvgPath()}
      offset={offsetPercentage}
      onClick={handleshowspeechbubble}
    />
  )
}
