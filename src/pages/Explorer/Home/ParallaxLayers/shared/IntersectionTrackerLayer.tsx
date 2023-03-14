import React, { RefObject } from 'react'
import { ParallaxLayer, ParallaxLayerProps } from '@react-spring/parallax'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface Props extends ParallaxLayerProps {
  uniqueId: string
}

export const IntersectionTrackerLayer = ({ uniqueId, ...rest }: Props) => {
  const [, targetRef] = useIntersectionObserver(uniqueId, 0.1)

  const divRef = targetRef as RefObject<HTMLDivElement>

  return (
    <ParallaxLayer {...rest}>
      <div ref={divRef} />
    </ParallaxLayer>
  )
}
