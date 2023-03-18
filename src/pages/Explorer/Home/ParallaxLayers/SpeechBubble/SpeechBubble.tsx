import React, { useState } from 'react'
import styled from 'styled-components'

import { TypewriterWrapper } from './TypewriterWrapper'

import { theme } from '@/theme/theme'

const Container = styled.div<{ show: boolean }>`
  background-color: ${(props) => props.theme.palette.persianGreen};
  position: absolute;
  margin-left: 5%;
  margin-top: 5%;
  border-radius: 30rem;
  background-color: rgba(0, 0, 0, 0.5);
  height: 35%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: all 5s;
  animation: ${(props) => props.show && 'grow 1s'};
  transform-origin: bottom left;
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
  `Hi, <span style="color:${theme.palette.marioGreen}">click</span> the button below!`,
  "I'm Peter, a developer with a keen passion for <i>aesthetics</i> ✨",
  'I enjoy mentoring junior developers and empowering my team',
  'My hobbies include game dev, weight lifting and cooking',
]

export const SpeechBubble = ({
  scrollToCallback,
  showspeechbubble,
}: {
  scrollToCallback: () => void
  showspeechbubble: boolean
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [showClickMe, setShowClickMe] = useState(true)
  const textAvailable = currentStringIndex < TypewriterStringToRender.length - 1

  const handleClick = () => {
    if (textAvailable) {
      setCurrentStringIndex((prev) => prev + 1)
    } else {
      setCurrentStringIndex(0)
      scrollToCallback()
    }
  }

  const handleHideClickMe = () => {
    setShowClickMe(false)
  }

  const handleShowClickMe = () => {
    setShowClickMe(true)
  }

  return (
    <Container show={showspeechbubble}>
      <NameTag>
        <span style={{ color: theme.palette.marioRed }}>P</span>
        <span style={{ color: theme.palette.marioGreen }}>E</span>
        <span style={{ color: theme.palette.marioYellow }}>T</span>
        <span style={{ color: theme.palette.marioBlue }}>E</span>
        <span style={{ color: theme.palette.marioRed }}>R</span>
      </NameTag>
      <InnerBorder>
        <SpeechBubbleTextContainer>
          <TypewriterWrapper
            text={TypewriterStringToRender[currentStringIndex]}
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
