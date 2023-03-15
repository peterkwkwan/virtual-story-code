import React, { RefObject } from 'react'
import styled from 'styled-components'

import { IDENTITY } from '../shared/constants'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Header = styled.h3<{ hide: boolean }>`
  position: absolute;
  bottom: 10%;
  text-transform: uppercase;
  font-family: 'League Spartan';
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => (props.hide ? 'transparent' : 'white')};
  transition: color 0.25s;
`

type Props = { identity: IDENTITY; hide?: boolean }

export const Identity = ({ identity, hide = false }: Props) => {
  const [, targetRef] = useIntersectionObserver(identity)

  const headRef = targetRef as RefObject<HTMLHeadingElement>

  return (
    <Container>
      <Header ref={headRef} hide={hide}>
        - {identity} -
      </Header>
    </Container>
  )
}
