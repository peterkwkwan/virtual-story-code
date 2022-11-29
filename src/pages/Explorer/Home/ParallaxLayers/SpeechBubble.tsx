import React, { useState } from 'react'
import styled from 'styled-components'

import { TypewriterWrapper } from './TypewriterWrapper'

const Container = styled.div`
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
`

const NameTag = styled.p`
    font-size: 2rem;
    position: absolute;
    margin: 0;
    top: -5%;
    left: 18%;
    color: ${(props) => props.theme.palette.white};
    text-shadow: 2px 2px 4px ${(props) => props.theme.palette.dark02};
    font-style: italic;
`

const InnerBorder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    background: url("../../assets/images/speech-bubble-border.png");
    background-position: center;
    height: 50%;
    width: 15%;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    left: 1%;
  }
  &:after {
    content: "";
    background: url("../../assets/images/speech-bubble-border.png");
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${(props) => props.theme.palette.dark02};
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.palette.grey};
  background-color: ${(props) => props.theme.palette.white};
  box-shadow: 0 0 40px ${(props) => props.theme.palette.dark02};
  height: 40px;
  width: 40px;
  padding: 28px;
  pointer-events: all;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 40px ${(props) => props.theme.palette.white};
  }
`

const TypewriterStringToRender = [
  'Hi, click the button below!',
  "I'm Peter, a developer with a keen passion for <i>aesthetics</i> ✨",
  'I enjoy mentoring junior developers and empowering my team',
  'My other passions include video games, reading and cooking 🍳'
]

export const SpeechBubble = ({scrollToCallback}: {scrollToCallback: () => void}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [showClickMe, setShowClickMe] = useState(true)
  const textAvailable = currentStringIndex < TypewriterStringToRender.length - 1

  const handleClick = () => {
    if (textAvailable) {
      setCurrentStringIndex((prev) => prev + 1)
    } else {
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
    <Container>
      <NameTag>Peter</NameTag>
      <InnerBorder>
        <SpeechBubbleTextContainer>
          <TypewriterWrapper
            text={TypewriterStringToRender[currentStringIndex]}
            handleHideClickMe={handleHideClickMe}
            handleShowClickMe={handleShowClickMe}
          />
          <ButtonContainer>
            {showClickMe && <ClickMe>Click!</ClickMe>}
            <Button onClick={handleClick}>{textAvailable ? 'A': '\u2713'}</Button>
          </ButtonContainer>
        </SpeechBubbleTextContainer>
      </InnerBorder>
    </Container>
  )
}
