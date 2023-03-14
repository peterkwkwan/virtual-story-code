import React from 'react'
import styled from 'styled-components'

import { useStore } from '@/hooks/useStore'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'League Spartan';
  color: ${(props) => props.theme.palette.white};
  text-transform: uppercase;
  position: relative;
  padding: 12px;
  border: 5px solid ${(props) => props.theme.palette.white};
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    background: ${(props) => props.theme.palette.darkOrange};
  }
  &::before {
    top: 5rem;
    bottom: -1rem;
    left: -3rem;
    right: 1rem;
  }

  &::after {
    left: 1rem;
    right: -3rem;
    top: -1rem;
    bottom: 5rem;
  }
`

const Header = styled.h3`
  font-weight: 400;
  font-size: 7rem;
  margin: 0;
  z-index: 10;
`

const Subtitle = styled.h6`
  font-weight: 200;
  font-size: 2rem;
  margin: 0;
  z-index: 10;
`

export const Title = () => {
  const visibility = useStore((state) => state.visibility)
  const shatter = visibility['marioVine']

  return (
    <Container>
      <Header>My Career</Header>
      <Subtitle>(so far)</Subtitle>
    </Container>
  )
}
