import React from 'react'
import styled from 'styled-components'

import { ScrollPrompt } from '../shared/ScrollPrompt'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`
const NameContainer = styled.div`
  position: relative;
  display: flex;
`
const Hello = styled.h2`
  writing-mode: vertical-rl;
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: 100;
  margin: 0;
  letter-spacing: 1rem;
  font-family: 'League Spartan';
`

const There = styled.h2`
  font-family: 'League Spartan';
  position: relative;
  font-size: 6rem;
  font-weight: 200;
  text-transform: uppercase;
  margin: 0;
`

const Name = styled.h1`
  font-size: 8rem;
  margin: 0;
  text-transform: uppercase;
  line-height: 95%;
`

export const Intro = () => {
  return (
    <Container>
      <NameContainer>
        <Hello>Hello</Hello>
        <div style={{ marginLeft: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <There>there</There>
            <h1 style={{ marginLeft: '1rem' }}>I&apos;m</h1>
          </div>
          <Name>Peter</Name>
          <Name>Kwan</Name>
        </div>
      </NameContainer>
      <ScrollPrompt />
    </Container>
  )
}