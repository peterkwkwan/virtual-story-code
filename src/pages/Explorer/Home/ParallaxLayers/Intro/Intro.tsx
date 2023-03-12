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
const NameContainer = styled.div<{ isVisible: boolean }>`
  position: relative;
  display: flex;
  text-shadow: ${(props) => (props.isVisible ? '1px 1px 2px #000' : '')};
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

const HeaderText = styled.div<{ isVisible: boolean }>`
  position: relative;
  margin: 0;
  font-family: 'League Spartan';
  text-transform: uppercase;
  transition: all 1s;
`

const HelloThere = styled(HeaderText)`
  font-size: ${(props) => (props.isVisible ? '4rem' : '8rem')};
  font-weight: ${(props) => (props.isVisible ? 100 : 400)};
  color: ${(props) =>
    props.isVisible ? 'white' : props.theme.palette.yellowBrackets};
  text-shadow: 1px 1px 2px #000;
  opacity: ${(props) => (props.isVisible ? 0.65 : 1)};
`

const App = styled(HeaderText)`
  font-weight: 100;
  line-height: 95%;
  font-size: ${(props) => (props.isVisible ? '0px' : '4rem')};
  opacity: ${(props) => (props.isVisible ? 0 : 1)};
  position: ${(props) => (props.isVisible ? 'absolute' : 'relative')};
`

const IAm = styled(HeaderText)`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  width: ${(props) => (props.isVisible ? 'unset' : '0px')};
`

const Name = styled(HeaderText)`
  font-size: 8rem;
  line-height: 95%;
  color: ${(props) =>
    props.isVisible ? 'white' : props.theme.palette.darkOrange};
  font-size: ${(props) => (props.isVisible ? '8rem' : '0px')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
`

const NotTypical = styled(HeaderText)`
  font-weight: 100;
  line-height: 95%;
  font-size: ${(props) => (props.isVisible ? '0px' : '4rem')};
  opacity: ${(props) => (props.isVisible ? 0 : 1)};
`

export const Intro = () => {
  const visibility = useStore((state) => state.visibility)

  const isVisible = visibility[IDENTITY.EAT]

  return (
    <Container>
      <NameContainer isVisible={isVisible}>
        <div style={{ marginLeft: '0.5rem' }}>
          <NotTypical isVisible={isVisible}>Not</NotTypical>
          <NotTypical isVisible={isVisible}>Your typical</NotTypical>
          <HelloThere isVisible={isVisible}>Hello</HelloThere>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <HelloThere isVisible={isVisible}>
              {isVisible ? 'there' : 'world'}
            </HelloThere>
            <App isVisible={isVisible}>App</App>
            <IAm
              style={{
                marginLeft: '1rem',
                fontSize: '2rem',
              }}
              isVisible={isVisible}
            >
              I&apos;m
            </IAm>
          </div>

          <Name isVisible={isVisible}>Peter</Name>
          <Name isVisible={isVisible}>Kwan</Name>
        </div>
      </NameContainer>
      <ScrollPrompt />
    </Container>
  )
}
