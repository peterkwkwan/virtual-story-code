import React, { RefObject } from 'react'

import { IDENTITY } from '../shared/constants'
import { Identity } from './Identity'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export const Eat = () => {
  const [, targetRef] = useIntersectionObserver(IDENTITY.EAT)

  const headRef = targetRef as RefObject<HTMLHeadingElement>

  return <Identity ref={headRef} identity={IDENTITY.EAT} />
}
