import React, { useState } from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from '@react-spring/parallax'

import { TypewriterWrapper } from './TypewriterWrapper'

import { theme } from '@/theme/theme'
import { useBoundStore } from '@/hooks/useBoundStore'
import { Tracker } from '@/hooks/useIntersectionObserver'

export const SpeechBubbleParallaxLayer = styled(ParallaxLayer)`
  &::before {
    position: absolute;
    bottom: -10px;
    content: '';
    height: 5%;
    width: 100%;
    filter: blur(10px);
    transform: scale(0.95) translateZ(0);
    /* background-position: left; */
    background-size: 200% 200%;
    background-image: linear-gradient(
      to left,
      #e5d6d8,
      #dabbc9,
      #c42da8,
      #9e16c3,
      #959595,
      #e5b4f2,
      #c42da8,
      #e4428d,
      #c5c3c3
    );
    animation: animateGlow 1.25s infinite;
    @keyframes animateGlow {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 200% 50%;
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
  animation: ${(props) => props.show && 'grow 1s'};
  transform-origin: bottom left;
  transition: opacity 1s;
  @keyframes grow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
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
    background: url('/assets/images/speech-bubble-border.png');
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
    background: url('/assets/images/speech-bubble-border.png');
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

const TypewriterStringToRender = [
  `Ow... (<span style="color:${theme.palette.marioGreen}">click</span> the button below to wake Mario up!)`,
  "It's-a-Me, Mario! Wait... how did I end up here?",
  `<span style="color:${theme.palette.marioRed}; font-family: 'SuperMario256'; text-shadow: 1px 1px 2px ${theme.palette.marioYellow};">Bowser</span> must have knocked me out cold...`,
  `No time to waste! I have to go save <span style="color:${theme.palette.brightPink}; font-family: 'SuperMario256'; text-shadow: 1px 1px 2px #fff};">Peach</span>!`,
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
            <Button onClick={handleClick}>
              {textAvailable ? 'A' : '\u2713'}
            </Button>
          </ButtonContainer>
        </SpeechBubbleTextContainer>
      </InnerBorder>
    </Container>
  )
}
