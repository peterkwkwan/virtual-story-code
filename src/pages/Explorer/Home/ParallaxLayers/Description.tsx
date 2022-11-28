
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: relative;
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
  &:before {
    content: 'Peter';
    font-size: 2rem;
    margin-right: 4px;
    position: absolute;
    top: -5%;
    left: 18%;
    color: ${(props) => props.theme.palette.white};
  }
`

const InnerBorder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
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
    content: '';
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

const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`

const DescriptionText = styled.h6`
  color: ${(props) => props.theme.palette.white};
  font-size: 2.5rem;
  text-align: left;
  margin: 0;
`

const Button = styled.div`
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
    padding: 8px;
    position: absolute;
    bottom: -12%;
    pointer-events: all;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 40px ${(props) => props.theme.palette.white};
  }
`

const DescriptionString = [
  'I\'m a software developer with a keen passion for aesthetics!',
  'I come from a non-tech background and taught myself programming.'
]

export const Description = () => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)

  const handleClick = () => {
    if(currentStringIndex < DescriptionString.length - 1){
      setCurrentStringIndex(prev => prev + 1)
    }
  }

  return (
    <Container>
      <InnerBorder>
        <DescriptionContainer>
          <DescriptionText>{DescriptionString[currentStringIndex]}</DescriptionText>
          <Button onClick={handleClick}>A</Button>
        </DescriptionContainer>
      </InnerBorder>
    </Container>
  )
}

