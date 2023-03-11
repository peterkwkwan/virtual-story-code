import React, { RefObject } from 'react'
import styled from 'styled-components'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Header = styled.h3`
  position: absolute;
  bottom: 10%;
  text-transform: uppercase;
  font-family: 'League Spartan';
  font-size: 2rem;
  font-weight: 700;
  color: white;
`

export const Identity = ({ identity }: { identity: string }) => {
  const [, targetRef] = useIntersectionObserver({
    threshold: 0.5,
  })

  const headRef = targetRef as RefObject<HTMLHeadingElement>

  return (
    <Container>
      {identity === 'code' ? (
        <Header ref={headRef}>- {identity} -</Header>
      ) : (
        <Header>- {identity} -</Header>
      )}
    </Container>
  )
}
