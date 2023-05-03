import React, { RefObject } from 'react'
import styled from 'styled-components'

import {
  Tracker,
  useIntersectionObserver,
} from '@/hooks/useIntersectionObserver'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const TitleContainer = styled.div`
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

const Subtitle = styled.span`
  font-weight: 200;
  font-size: 2rem;
  margin: 0;
  z-index: 10;
`

const TrackerDiv = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 1px;
`

export const Title = () => {
  const [, targetRef] = useIntersectionObserver(
    Tracker.MY_CAREER_TITLE_CARD,
    0.2
  )

  const divRef = targetRef as RefObject<HTMLDivElement>

  return (
    <Container>
      <TitleContainer>
        <Header>My Career</Header>
        <Subtitle>(so far)</Subtitle>
      </TitleContainer>
      <TrackerDiv ref={divRef} />
    </Container>
  )
}
