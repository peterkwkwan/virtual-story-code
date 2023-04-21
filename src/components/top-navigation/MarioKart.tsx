import React from 'react'
import styled from 'styled-components'

interface Props {
  marioKartIsRacing: boolean
}

const Container = styled.div<{ marioKartIsRacing: boolean }>`
  position: absolute;
  display: ${(props) => (props.marioKartIsRacing ? 'block' : 'none')};
  align-items: flex-end;
  width: calc(100% - 124px);
  left: 68px;
`

const Sprite = styled.img`
  @keyframes race {
    0% {
      transform: translateX(0px);
    }
    80% {
      transform: translateX(calc(100vw - 210px));
    }
    81% {
      visibility: hidden;
      transform: translateX(calc(100vw - 210px));
    }
    100% {
      visibility: hidden;
      transform: translateX(calc(100vw - 210px));
    }
  }
  height: 24px;
  animation: race 15s ease-in 3s;
  position: relative;
`

const Pipe = styled.img`
  @keyframes pipeGrow {
    0% {
      width: 0px;
    }
    100% {
      width: 100px;
    }
  }
  @keyframes pipeShrink {
    0% {
      width: 100px;
    }
    100% {
      width: 0px;
    }
  }
  z-index: 1;
  height: 36px;
  width: 100px;
  position: absolute;
  right: 0;
  top: -6px;
  animation: pipeGrow 2s linear, pipeShrink 2s linear 15s;
`

export const MarioKart = ({ marioKartIsRacing }: Props) => {
  const MKRacers = ['bowser', 'mario', 'toad', 'yoshi']

  return (
    <Container marioKartIsRacing={marioKartIsRacing}>
      {MKRacers.map((racer) => {
        return (
          <Sprite
            key={racer}
            src={`/assets/icons/top-navbar/${racer}-mk.png`}
            alt={`mk-racer-${racer}`}
          />
        )
      })}
      <Pipe src="/assets/icons/top-navbar/mario-pipe.png" alt="pipe" />
    </Container>
  )
}
