import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IParallax } from '@react-spring/parallax'

import { useBoundStore } from '@/hooks/useBoundStore'
import { Tracker } from '@/hooks/useIntersectionObserver'

type MarioProps = {
  offset: number
  talking: boolean
}

const Mario = styled.img<MarioProps>`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 120px;
  max-height: 120px;
  right: ${(props) => (props.talking ? 80 : props.offset)}%;
  top: ${(props) => (props.talking ? 80 : props.offset)}%;
  transition: transform 1s;
  cursor: pointer;
  pointer-events: all;
  filter: drop-shadow(0px 0px 4px #fff);
`
interface Props {
  parallax: React.RefObject<IParallax>
  numberOfPages: number
  speechBubbleStart: number
}

export const MovingMario = ({
  parallax,
  numberOfPages,
  speechBubbleStart,
}: Props) => {
  const offsetPercentage = useBoundStore((state) => state.offsetPercentage)
  const setOffsetPercentage = useBoundStore(
    (state) => state.setOffsetPercentage
  )
  const speechIndex = useBoundStore((state) => state.speechIndex)
  const visibility = useBoundStore((state) => state.visibility)
  const showSpeechBubble = visibility[Tracker.SPEECH_BUBBLE]

  const marioIsThinking = 1
  const marioIsNeutral = 2
  const marioIsAngry = 3
  const marioIsThinkingAgain = 4
  const marioIsHappy = 5

  useEffect(() => {
    const handleScroll = () => {
      if (parallax.current) {
        const percentage =
          (parallax.current.current /
            ((scrollHeight / numberOfPages) * speechBubbleStart)) *
          100

        if (percentage <= 80) setOffsetPercentage(percentage)
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
    if (offsetPercentage >= 80 || showSpeechBubble) {
      if (
        speechIndex === marioIsThinking ||
        speechIndex === marioIsThinkingAgain
      ) {
        return '/assets/images/home/mario/thinkingMario.png'
      }
      if (speechIndex === marioIsAngry) {
        return '/assets/images/home/mario/angryMario.png'
      }
      if (speechIndex === marioIsNeutral) {
        return '/assets/images/home/mario/neutralMario.png'
      }
      if (speechIndex === marioIsHappy) {
        return '/assets/images/home/mario/happyMario.png'
      }
      return '/assets/images/home/mario/faintedmario.png'
    }
    if (offsetPercentage < 10) {
      return '/assets/images/home/mario/marioInSpace.png'
    }
    if (offsetPercentage < 30) {
      return '/assets/images/home/mario/fallingMario1.png'
    }
    if (offsetPercentage < 55) {
      return '/assets/images/home/mario/fallingMario2.png'
    }
    if (offsetPercentage < 80) {
      return '/assets/images/home/mario/fallingMario3.png'
    }

    return '/assets/images/home/mario/faintedmario.png'
  }

  return (
    <Mario
      src={getSvgPath()}
      offset={offsetPercentage}
      talking={showSpeechBubble}
    />
  )
}
