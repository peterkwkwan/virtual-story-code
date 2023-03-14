import React from 'react'
import styled from 'styled-components'

import { ScrollPrompt } from '../shared/ScrollPrompt'
import { IDENTITY } from '../shared/constants'

import { useStore } from '@/hooks/useStore'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`
const NameContainer = styled.div<{ showName: boolean }>`
  position: relative;
  display: flex;
  text-shadow: ${(props) => (props.showName ? '1px 1px 2px #000' : '')};
  transition: text-shadow 1s;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    transition: border 0.5s;
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

const HeaderText = styled.div<{ showName: boolean }>`
  position: relative;
  margin: 0;
  font-family: 'League Spartan';
  text-transform: uppercase;
  transition: all 1s;
`

const HelloThere = styled(HeaderText)`
  font-size: ${(props) => (props.showName ? '4rem' : '8rem')};
  font-weight: ${(props) => (props.showName ? 100 : 400)};
  color: ${(props) =>
    props.showName ? 'white' : props.theme.palette.yellowBrackets};
  text-shadow: 1px 1px 2px #000;
  opacity: ${(props) => (props.showName ? 0.65 : 1)};
`

const App = styled(HeaderText)`
  font-weight: 100;
  line-height: 95%;
  font-size: ${(props) => (props.showName ? '0px' : '4rem')};
  opacity: ${(props) => (props.showName ? 0 : 1)};
  position: ${(props) => (props.showName ? 'absolute' : 'relative')};
`

const IAm = styled(HeaderText)`
  opacity: ${(props) => (props.showName ? 1 : 0)};
  width: ${(props) => (props.showName ? 'unset' : '0px')};
`

const Name = styled(HeaderText)`
  font-size: 8rem;
  line-height: 95%;
  color: ${(props) =>
    props.showName ? props.theme.palette.yellowBrackets : 'transparent'};
  font-size: ${(props) => (props.showName ? '8rem' : '0px')};
  opacity: ${(props) => (props.showName ? 1 : 0)};
`

const NotTypical = styled(HeaderText)`
  font-weight: 100;
  line-height: 95%;
  font-size: ${(props) => (props.showName ? '0px' : '4rem')};
  opacity: ${(props) => (props.showName ? 0 : 1)};
`

export const Intro = ({ showName }: { showName: boolean }) => {
  return (
    <Container>
      <NameContainer showName={showName}>
        <div style={{ marginLeft: '0.5rem' }}>
          <NotTypical showName={showName}>Not</NotTypical>
          <NotTypical showName={showName}>Your typical</NotTypical>
          <HelloThere showName={showName}>Hello</HelloThere>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <HelloThere showName={showName}>
              {showName ? 'there' : 'world'}
            </HelloThere>
            <App showName={showName}>App</App>
            <IAm
              style={{
                marginLeft: '1rem',
                fontSize: '2rem',
              }}
              showName={showName}
            >
              I&apos;m
            </IAm>
          </div>

          <Name showName={showName}>Peter</Name>
          <Name showName={showName}>Kwan</Name>
        </div>
      </NameContainer>
      <ScrollPrompt />
    </Container>
  )
}
