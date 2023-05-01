import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 50;
`

const StepContainer = styled.div`
  position: absolute;
  top: 32px;
  left: 52px;
  background-color: ${(props) => props.theme.palette.waluigiPurple};
  color: white;
  padding: 4px;
  z-index: 51;
  border-radius: 4px;
  > div p {
    margin: 12px 8px;
  }
`

const Description = styled.div``

const StepIndicator = styled.div<{ step: number }>`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  > div > span:nth-child(${(props) => props.step + 1}) {
    background-color: ${(props) => props.theme.palette.warioYellow};
  }
`
const Dot = styled.span`
  margin-right: 8px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.palette.text01};
`

const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.palette.warioYellow};
  border: none;
  border-radius: 2px;
  padding: 2px 8px;
  font-size: 1rem;
`

const Darken = styled.div<{ step: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  clip-path: polygon(
    0 28px,
    354px 28px,
    354px 0%,
    100% 0%,
    100% 100%,
    0% 100%,
    0% 248px,
    48px 248px,
    48px 56px,
    0% 56px
  );
`

export const Guidance = () => {
  const [step, setStep] = useState(0)

  return (
    <Container>
      <StepContainer>
        <Description>
          <p>Welcome to my portfolio site!</p>
          <p>Use the top navigational menu or sidebar to change pages</p>
        </Description>
        <StepIndicator step={step}>
          <div>
            <Dot />
            <Dot />
          </div>
          <Button>Next</Button>
        </StepIndicator>
      </StepContainer>
      <Darken step={step} />
    </Container>
  )
}
