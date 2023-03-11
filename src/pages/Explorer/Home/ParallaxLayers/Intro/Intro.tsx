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
    border-top: 5px solid ${(props) => props.theme.palette.darkOrange};
    border-left: 5px solid ${(props) => props.theme.palette.darkOrange};
  }

  &::after {
    bottom: 0;
    right: -1rem;
    height: 80%;
    width: 5%;
    border-bottom: 5px solid ${(props) => props.theme.palette.white};
    border-right: 5px solid ${(props) => props.theme.palette.white};
  }
`

const HeaderText = styled.div`
  position: relative;
`

const Hello = styled(HeaderText)`
  writing-mode: vertical-rl;
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: 100;
  margin: 0;
  letter-spacing: 1rem;
  font-family: 'League Spartan';
`

const There = styled(HeaderText)`
  font-family: 'League Spartan';
  font-size: 6rem;
  font-weight: 200;
  text-transform: uppercase;
  margin: 0;
`

const Name = styled(HeaderText)`
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <There>there</There>
            <HeaderText
              style={{
                marginLeft: '1rem',
                fontSize: '2rem',
              }}
            >
              I&apos;m
            </HeaderText>
          </div>
          <Name>Peter</Name>
          <Name>Kwan</Name>
        </div>
      </NameContainer>
      <ScrollPrompt />
    </Container>
  )
}
