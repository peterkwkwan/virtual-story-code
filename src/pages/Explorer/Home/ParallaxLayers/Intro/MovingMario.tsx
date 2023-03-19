import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IParallax } from '@react-spring/parallax'

import { useBoundStore } from '@/hooks/useBoundStore'

type MarioProps = {
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
  cursor: pointer;
  pointer-events: all;
  &:hover {
    filter: drop-shadow(0px 0px 4px #fff);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
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
    if (offsetPercentage >= 80) {
      return '/assets/images/home/faintedmario.svg'
    }
    if (offsetPercentage < 10) {
      return '/assets/images/home/marioInSpace.svg'
    }
    if (offsetPercentage < 30) {
      return '/assets/images/home/fallingMario1.svg'
    }
    if (offsetPercentage < 55) {
      return '/assets/images/home/fallingMario2.svg'
    }
    if (offsetPercentage < 80) {
      return '/assets/images/home/fallingMario3.svg'
    }

    return '/assets/images/home/faintedmario.svg'
  }

  return <Mario src={getSvgPath()} offset={offsetPercentage} />
}
