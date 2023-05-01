import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 50;
`

const StepContainer = styled.div<{ step: number }>`
  position: absolute;
  top: ${(props) => (props.step === 0 ? '32px' : '56px')};
  left: ${(props) => (props.step === 0 ? '52px' : '352px')};
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
  :hover {
    filter: brightness(110%);
    box-shadow: 1px 1px 4px black;
  }
`

const Darken = styled.div<{ step: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  clip-path: ${(props) =>
    props.step === 0
      ? 'polygon(0 28px, 354px 28px, 354px 0%, 100% 0%, 100% 100%, 48px 100%, 48px 56px, 0% 56px)'
      : 'polygon(0% 0%, 100% 0%, 100% 100%, 348px 100%, 348px 56px, 48px 56px, 48px 100%, 0% 100%);'};
`

const DESCRIPTION_STRINGS = [
  {
    first: 'Welcome to my site!',
    second: 'Use the top or side navigation menus to change pages.',
  },
  {
    first: 'Use the submenu to navigate within each page.',
    second: 'Enjoy your stay!',
  },
]

interface Props {
  handleCloseGuidance: () => void
}
export const Guidance = ({ handleCloseGuidance }: Props) => {
  const [step, setStep] = useState(0)

  const handleClick = () => {
    if (step === 0) {
      setStep((prev) => prev + 1)
    } else {
      handleCloseGuidance()
    }
  }

  return (
    <Container>
      <StepContainer step={step}>
        <Description>
          <p>{DESCRIPTION_STRINGS[step].first}</p>
          <p>{DESCRIPTION_STRINGS[step].second}</p>
        </Description>
        <StepIndicator step={step}>
          <div>
            <Dot />
            <Dot />
          </div>
          <Button onClick={handleClick}>
            {step === 0 ? 'Next' : 'Complete'}
          </Button>
        </StepIndicator>
      </StepContainer>
      <Darken step={step} />
    </Container>
  )
}
