import React, { RefObject } from 'react'
import { ParallaxLayer, ParallaxLayerProps } from '@react-spring/parallax'

import {
  Tracker,
  useIntersectionObserver,
} from '@/hooks/useIntersectionObserver'

interface Props extends ParallaxLayerProps {
  uniqueId: Tracker
  threshold?: number
}

export const IntersectionTrackerLayer = ({
  uniqueId,
  threshold = 0.5,
  ...rest
}: Props) => {
  const [, targetRef] = useIntersectionObserver(uniqueId, threshold)

  const divRef = targetRef as RefObject<HTMLDivElement>

  return (
    <ParallaxLayer {...rest}>
      <div ref={divRef} />
    </ParallaxLayer>
  )
}
