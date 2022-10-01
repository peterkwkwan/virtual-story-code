import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`
const Intro = styled.div`
  position: relative;
  display: flex;
  padding: 0.3rem;
  padding-top: 15%;
  background: ${(props) => props.theme.palette.dark01};
`
const Hello = styled.h2`
  writing-mode: vertical-rl;
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: 100;
  margin: 0;
  letter-spacing: 1rem;
  font-family: "League Spartan";
`

const There = styled.h2`
  font-family: "League Spartan";

  position: relative;
  font-size: 6rem;
  font-weight: 200;
  text-transform: uppercase;
  margin: 0;
`

const PeterKwan = styled.h1`
  font-size: 8rem;
  margin: 0;
  text-transform: uppercase;
  line-height: 95%;
`

const ScrollPrompt = styled.div`
  bottom: 10%;
  position: absolute;
  width: 30px;
  height: 30px;
  transform: rotate(45deg);
  border-right: 2px #fff solid;
  border-bottom: 2px #fff solid;

  &:before {
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    top: 5%;
    left: 5%;
    border-right: 1px #fff solid;
    border-bottom: 1px #fff solid;
    animation: arrow 2s infinite;
  }
  @keyframes arrow {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(10px, 10px);
    }
  }
`

export const IntroLayer = () => {
  return (
    <Container>
      <Intro>
        <Hello>Hello</Hello>
        <div style={{ marginLeft: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <There>there</There>
            <h1 style={{ marginLeft: '1rem' }}>I&apos;m</h1>
          </div>
          <PeterKwan>Peter</PeterKwan>
          <PeterKwan>Kwan</PeterKwan>
        </div>
      </Intro>
      <ScrollPrompt />
    </Container>
  )
}
