import React from 'react'
import styled, { css, keyframes } from 'styled-components'

enum Actions {
  CLOSE = 'close',
  MINIMIZE = 'minimize',
  EXPAND = 'expand',
}

enum TrafficLightColors {
  RED = '#f55549',
  YELLOW = '#f5c11b',
  GREEN = '#51d66a',
}

const ActionBtnContainer = styled.div`
  display: flex;
  margin-left: 8px;
  span:after {
    color: #3b3b3b;
    position: relative;
  }
  &:hover {
    span:nth-of-type(1):after {
      content: '\\00d7';
      font-size: 13px;
      left: 2px;
      top: -3.5px;
    }
    span:nth-of-type(2):after {
      display: block;
      content: '';
      width: 8px;
      height: 2px;
      top: 5px;
      left: 2px;
      background-color: #5e5e5e;
    }
    span:nth-of-type(3):before {
      content: '\\25E4';
      font-size: 4px;
      top: -6.5px;
      left: 3.5px;
      position: relative;
      color: #5e5e5e;
    }
    span:nth-of-type(3):after {
      content: '\\25E2';
      font-size: 4px;
      top: -4.5px;
      left: 1px;
      position: relative;
      color: #5e5e5e;
    }
  }
`

const trafficLightAnimation = (actionType: Actions) => keyframes`
  0% {
    background-color: ${TrafficLightColors.RED};
  }
  33% {
    background-color: ${
      actionType === Actions.CLOSE ? TrafficLightColors.RED : '#1e1e1e'
    };
  }
  66% {
    background-color: ${
      actionType === Actions.MINIMIZE ? TrafficLightColors.YELLOW : '#1e1e1e'
    };
  }
  100% {
    background-color: ${
      actionType === Actions.EXPAND ? TrafficLightColors.GREEN : '#1e1e1e'
    };
  }

`

const animationRule = (actionType: Actions) => {
  return css(
    ['', ' 3s steps(1, start)'] as any as TemplateStringsArray,
    trafficLightAnimation(actionType)
  )
}

const StyledActionBtn = styled.span<{
  marioKartIsRacing: boolean
  name: Actions
  btnColor: string
}>`
  content: ${(props) => props.name};
  width: 12px;
  height: 12px;
  margin: 0 4px;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  background-color: ${(props) => props.btnColor};
  animation: ${(props) => props.marioKartIsRacing && animationRule(props.name)};
`

const actionsBtns = [
  { name: Actions.CLOSE, btnColor: TrafficLightColors.RED },
  { name: Actions.MINIMIZE, btnColor: TrafficLightColors.YELLOW },
  { name: Actions.EXPAND, btnColor: TrafficLightColors.GREEN },
]

interface Props {
  handleActionClick: () => void
  marioKartIsRacing: boolean
}

export const ActionButtons = ({
  handleActionClick,
  marioKartIsRacing,
}: Props) => {
  return (
    <ActionBtnContainer>
      {actionsBtns.map((btn) => (
        <StyledActionBtn
          key={btn.name}
          marioKartIsRacing={marioKartIsRacing}
          name={btn.name}
          btnColor={btn.btnColor}
          onClick={handleActionClick}
        />
      ))}
    </ActionBtnContainer>
  )
}
