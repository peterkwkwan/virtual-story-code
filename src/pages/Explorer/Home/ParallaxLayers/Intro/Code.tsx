import React, { RefObject } from 'react'

import { IDENTITY } from '../shared/constants'
import { Identity } from './Identity'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export const Code = () => {
  const [, targetRef] = useIntersectionObserver(IDENTITY.CODE)

  const headRef = targetRef as RefObject<HTMLHeadingElement>

  return <Identity ref={headRef} identity={IDENTITY.CODE} />
}
