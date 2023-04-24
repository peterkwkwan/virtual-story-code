import React from 'react'
import styled from 'styled-components'

import { ScrollPrompt } from '../shared/ScrollPrompt'

import { useBoundStore } from '@/hooks/useBoundStore'
import { Tracker } from '@/hooks/useIntersectionObserver'

const Container = styled.div<{ hide: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  opacity: ${(props) => (props.hide ? 0 : 1)};
  transition: opacity 0.5s;
`
const NameContainer = styled.div<{ percentage: number }>`
  position: relative;
  display: flex;
  text-shadow: 1px 1px 2px #000;
  backdrop-filter: blur(4px) brightness(90%);

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
  }
  &::before {
    top: -1rem;
    left: -0.5rem;
    height: ${(props) => props.percentage || 0}%;
    width: ${(props) => props.percentage / 10 || 0}%;
    border-top: 5px solid white;
    border-left: 5px solid white;
  }

  &::after {
    bottom: 0;
    right: -0.5rem;
    height: ${(props) => props.percentage || 0}%;
    width: ${(props) => props.percentage / 10 || 0}%;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
  }
`

const HeaderText = styled.div`
  position: relative;
  margin: 0;
  font-family: 'League Spartan', 'League Spartan-fallback';
  text-transform: uppercase;
`

const HelloThere = styled(HeaderText)`
  font-size: 4rem;
  font-weight: 100;
  color: white;
  text-shadow: 1px 1px 2px #000;
  opacity: 0.85;
`

const App = styled(HeaderText)`
  font-weight: 100;
  line-height: 95%;
  font-size: '0px';
  opacity: 0;
  position: absolute;
`

const IAm = styled(HeaderText)`
  opacity: 0.85;
  width: unset;
`

const Name = styled(HeaderText)`
  font-size: 8rem;
  line-height: 95%;
  text-shadow: 1px 1px 10px #000;
  color: ${(props) => props.theme.palette.marioYellow};
  font-size: 8rem;
  opacity: 1;
`

export const Intro = () => {
  const visibility = useBoundStore((state) => state.visibility)
  const offsetPercentage = useBoundStore((state) => state.offsetPercentage)

  const isIntroFinished = visibility[Tracker.INTRO]

  return (
    <Container hide={isIntroFinished}>
      <NameContainer percentage={offsetPercentage}>
        <div style={{ marginLeft: '0.5rem' }}>
          <HelloThere>hello</HelloThere>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <HelloThere>there</HelloThere>
            <App>App</App>
            <IAm
              style={{
                marginLeft: '1rem',
                fontSize: '2rem',
              }}
            >
              I&apos;m
            </IAm>
          </div>

          <Name>Peter</Name>
          <Name>Kwan</Name>
        </div>
      </NameContainer>
      <ScrollPrompt />
    </Container>
  )
}
