import React from 'react'
import styled from 'styled-components'

import { ScrollPrompt } from '../shared/ScrollPrompt'

import { useStore } from '@/hooks/useStore'
import { Tracker } from '@/hooks/useIntersectionObserver'

const Container = styled.div<{ show: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  color: white;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 1s;
`
const NameContainer = styled.div`
  position: relative;
  display: flex;
  text-shadow: 1px 1px 2px #000;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
  }
  &::before {
    top: -1rem;
    left: -0.5rem;
    height: 80%;
    width: 5%;
    border-top: 5px solid white;
    border-left: 5px solid white;
  }

  &::after {
    bottom: 0;
    right: -1rem;
    height: 80%;
    width: 5%;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
  }
`

const HeaderText = styled.div`
  position: relative;
  margin: 0;
  font-family: 'League Spartan';
  text-transform: uppercase;
`

const HelloThere = styled(HeaderText)`
  font-size: 4rem;
  font-weight: 100;
  color: white;
  text-shadow: 1px 1px 2px #000;
  opacity: 0.65;
`

const App = styled(HeaderText)`
  font-weight: 100;
  line-height: 95%;
  font-size: '0px';
  opacity: 0;
  position: absolute;
`

const IAm = styled(HeaderText)`
  opacity: 1;
  width: unset;
`

const Name = styled(HeaderText)`
  font-size: 8rem;
  line-height: 95%;
  color: ${(props) => props.theme.palette.yellowBrackets};
  font-size: 8rem;
  opacity: 1;
`

export const Intro = () => {
  const visibility = useStore((state) => state.visibility)
  const introVisible = visibility[Tracker.INTRO]

  return (
    <Container show={introVisible}>
      <NameContainer>
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
