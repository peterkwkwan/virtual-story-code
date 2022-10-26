
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin-left: 5%;
margin-top: 5%;
  border-radius: 30rem;
  background-color: rgba(0, 0, 0, 0.5);
  height: 35%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: 'Peter';
    font-size: 2rem;
    margin-right: 4px;
    position: absolute;
    top: 6%;
    left: 18%;
    color: ${(props) => props.theme.palette.white};
  }
`

const InnerBorder = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    background: url("../../assets/images/speech-bubble-border.png");
    background-position: center;
    height: 50%;
    width: 5%;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    left: -2%;
  }
  &:after {
    content: '';
    background: url("../../assets/images/speech-bubble-border.png");
    background-position: center;
    transform: rotate(180deg);
    height: 50%;
    width: 5%;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    right: -2%;
  }
`

const DescriptionText = styled.h6`
  color: ${(props) => props.theme.palette.white};
  font-size: 2.5rem;
  text-align: left;
  width: 85%;
`
export const Description = () => {
  return (
    <Container>
      <InnerBorder>
        <DescriptionText>I&apos;m a software developer with a keen passion for aesthetics!</DescriptionText>
      </InnerBorder>
    </Container>
  )
}

