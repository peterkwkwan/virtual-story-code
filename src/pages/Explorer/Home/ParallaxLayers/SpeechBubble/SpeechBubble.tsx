import React, { useState } from 'react'
import styled from 'styled-components'
import { ParallaxLayer, ParallaxLayerProps } from '@react-spring/parallax'

import { TypewriterWrapper } from './TypewriterWrapper'

import { theme } from '@/theme/theme'
import { useBoundStore } from '@/hooks/useBoundStore'
import { Tracker } from '@/hooks/useIntersectionObserver'

interface ISpeechBubbleParallaxLayer extends ParallaxLayerProps {
  flicker: string
}

export const SpeechBubbleParallaxLayer = styled(
  ParallaxLayer
)<ISpeechBubbleParallaxLayer>`
  &::before {
    position: absolute;
    bottom: -30%;
    content: '';
    height: 45%;
    width: 100%;
    transform: scale(1.5);
    background-image: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;
    animation: ${(props) =>
      props.flicker === 'true' ? 'flicker 8s infinite;' : ''};
    @keyframes flicker {
      from {
        opacity: 0.5;
      }
      4% {
        opacity: 0.7;
      }
      8% {
        opacity: 0.45;
      }
      12% {
        opacity: 0.75;
      }
      16% {
        opacity: 0.3;
      }
      20% {
        opacity: 0.5;
      }
      24% {
        opacity: 0.6;
      }
      28% {
        opacity: 0.25;
      }
      32% {
        opacity: 0.3;
      }
      36% {
        opacity: 0.55;
      }
      40% {
        opacity: 0.4;
      }
      44% {
        opacity: 0.6;
      }
      48% {
        opacity: 0.35;
      }
      52% {
        opacity: 0.2;
      }
      56% {
        opacity: 0.7;
      }
      60% {
        opacity: 0.5;
      }
      64% {
        opacity: 0.85;
      }
      68% {
        opacity: 0.35;
      }
      72% {
        opacity: 0.5;
      }
      76% {
        opacity: 0.4;
      }
      80% {
        opacity: 0.65;
      }
      84% {
        opacity: 0.4;
      }
      88% {
        opacity: 0.35;
      }
      92% {
        opacity: 0.6;
      }
      96% {
        opacity: 0.3;
      }
      to {
        opacity: 0.5;
      }
    }
  }
`

const Container = styled.div<{ show: boolean }>`
  position: absolute;
  margin-left: 5%;
  margin-top: 5%;
  border-radius: 30rem;
  background-color: ${(props) => props.theme.palette.dark04};
  height: 35%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform-origin: bottom left;
  transition: opacity 1s;
  user-select: none;
  -webkit-user-select: none;
`

const NameTag = styled.p`
  font-family: 'SuperMario256';
  font-size: 2.5rem;
  -webkit-text-stroke: 5px black;
  position: absolute;
  margin: 0;
  top: -5%;
  left: 18%;
  text-shadow: 2px 2px 8px ${(props) => props.theme.palette.dark02};
`

const InnerBorder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    background: url('/assets/images/speech-bubble-border.webp');
    background-position: center;
    height: 50%;
    width: 15%;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    left: 1%;
  }
  &:after {
    content: '';
    background: url('/assets/images/speech-bubble-border.webp');
    background-position: center;
    transform: rotate(180deg);
    height: 50%;
    width: 15%;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    right: 1%;
  }
`

const SpeechBubbleTextContainer = styled.div`
  position: relative;
  display: flex;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: -12%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ClickMe = styled.p`
  position: absolute;
  top: -22px;
  right: -25px;
  color: ${(props) => props.theme.palette.white};
  font-size: 0.75rem;
  transform: rotate(25deg);
  animation: fadeIn 1s alternate infinite;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Button = styled.button`
  color: black;
  background-color: ${(props) => props.theme.palette.marioGreen};
  border: 1px solid transparent;
  font-size: 2rem;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0px 5px grey;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  pointer-events: all;
  &:hover {
    border: 1px solid black;
  }
  &:active {
    transform: translateY(3px);
    box-shadow: 0 2px grey;
  }
`

export const TypewriterStringToRender = [
  `Ow... (<span style="color:${theme.palette.marioGreen}">click</span> the button below to wake Mario up!)`,
  "It's-a-Me, Mario! Wait... how did I end up here?",
  `<span style="color:${theme.palette.marioRed}; font-family: 'SuperMario256'; text-shadow: 1px 1px 2px ${theme.palette.dark01};">Bowser</span> must have knocked me out cold...`,
  `No time to waste! I have to go save <span style="color:${theme.palette.brightPink}; font-family: 'SuperMario256'; text-shadow: 1px 1px 2px ${theme.palette.dark01}};">Peach</span>!`,
  'But I need to find a way out...',
  "Look! A path opened up below! Let's go!",
]

export const SpeechBubble = ({
  finishSpeechCallback,
}: {
  finishSpeechCallback: () => void
}) => {
  const speechIndex = useBoundStore((state) => state.speechIndex)
  const increaseSpeechIndex = useBoundStore(
    (state) => state.increaseSpeechIndex
  )
  const resetSpeechIndex = useBoundStore((state) => state.resetSpeechIndex)

  const [showClickMe, setShowClickMe] = useState(true)
  const textAvailable = speechIndex < TypewriterStringToRender.length - 1

  const visibility = useBoundStore((state) => state.visibility)
  const showSpeechBubble = visibility[Tracker.SPEECH_BUBBLE]

  const handleClick = () => {
    if (textAvailable) {
      increaseSpeechIndex()
    } else {
      resetSpeechIndex()
      finishSpeechCallback()
    }
  }

  const handleHideClickMe = () => {
    setShowClickMe(false)
  }

  const handleShowClickMe = () => {
    setShowClickMe(true)
  }

  return (
    <Container show={showSpeechBubble}>
      <NameTag>
        <span style={{ color: theme.palette.marioRed }}>M</span>
        <span style={{ color: theme.palette.marioGreen }}>A</span>
        <span style={{ color: theme.palette.marioYellow }}>R</span>
        <span style={{ color: theme.palette.marioBlue }}>I</span>
        <span style={{ color: theme.palette.marioRed }}>O</span>
      </NameTag>
      <InnerBorder>
        <SpeechBubbleTextContainer>
          <TypewriterWrapper
            text={TypewriterStringToRender[speechIndex]}
            handleHideClickMe={handleHideClickMe}
            handleShowClickMe={handleShowClickMe}
          />
          <ButtonContainer>
            {showClickMe && <ClickMe>Click!</ClickMe>}
            <Button aria-label="Next" onClick={handleClick}>
              {textAvailable ? 'A' : '\u2713'}
            </Button>
          </ButtonContainer>
        </SpeechBubbleTextContainer>
      </InnerBorder>
    </Container>
  )
}
