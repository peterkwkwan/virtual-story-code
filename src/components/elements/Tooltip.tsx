import React, { useState } from 'react'
import styled from 'styled-components'

const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`

const TooltipTip = styled.div<{ direction: string }>`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: ${(props) => props.theme.palette.text01};
  background: black;
  z-index: 100;
  white-space: nowrap;

  //top
  top: ${(props) => props.direction === 'top' && '-100%'};

  // right
  top: ${(props) => props.direction === 'right' && '50%'};
  left: ${(props) => props.direction === 'right' && 'calc(100% + 10px)'};
  transform: ${(props) =>
    props.direction === 'right' && 'translateX(0) translateY(-50%)'};

  // bottom
  bottom: ${(props) => props.direction === 'bottom' && '-100%'};

  // left
  left: ${(props) => props.direction === 'left' && 'auto'};
  right: ${(props) => props.direction === 'left' && 'calc(100% + 10px)'};
  top: ${(props) => props.direction === 'left' && '50%'};
  transform: ${(props) =>
    props.direction === 'left' && 'translateX(0) translateY(-50%)'};

  ::before {
    content: ' ';
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);

    //top
    top: ${(props) => props.direction === 'top' && '100%'};
    border-top-color: ${(props) => props.direction === 'top' && 'black'};

    // right
    left: ${(props) => props.direction === 'right' && 'calc(6px * -1)'};
    top: ${(props) => props.direction === 'right' && '50%'};
    transform: ${(props) =>
      props.direction === 'right' && 'translateX(0) translateY(-50%)'};
    border-right-color: ${(props) => props.direction === 'right' && 'black'};

    // bottom
    bottom: ${(props) => props.direction === 'bottom' && '100%'};
    border-bottom-color: ${(props) => props.direction === 'bottom' && 'black'};

    // left
    left: ${(props) => props.direction === 'left' && 'auto'};
    right: ${(props) => props.direction === 'left' && 'calc(6px * -2)'};
    top: ${(props) => props.direction === 'left' && '50%'};
    transform: ${(props) =>
      props.direction === 'left' && 'translateX(0) translateY(-50%)'};
    border-left-color: ${(props) => props.direction === 'left' && 'black'};
  }
`
interface Props {
  content: string | React.ReactNode
  children: React.ReactNode
  direction?: 'top' | 'bottom' | 'right' | 'left'
  delay?: number
}

export const Tooltip = ({
  delay = 300,
  content,
  direction = 'top',
  children,
}: Props) => {
  const [active, setActive] = useState(false)

  let timeout: NodeJS.Timeout

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && <TooltipTip direction={direction}>{content}</TooltipTip>}
    </TooltipWrapper>
  )
}
