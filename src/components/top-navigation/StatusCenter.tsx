import React from 'react'
import styled from 'styled-components'

const Container = styled.div<{ gradient: boolean }>`
  display: flex;
  height: 100%;
  align-items: center;
  margin-right: 16px;
  color: ${(props) =>
    props.gradient ? props.theme.palette.dark01 : props.theme.palette.white};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  user-select: none;
`

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  margin: 2px 8px;
  padding: 2px 4px 2px 8px;
  border-radius: 4px;
  border: 1px solid white;
  font-size: 0.65rem;
`

const size = 8
const border = 8

const LEDLight = styled.span`
  position: relative;
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  margin: 4px;
  background: ${(props) => props.theme.palette.marioGreen};
  ::before {
    background: ${(props) => props.theme.palette.marioGreen};
    content: '';
    display: block;
    position: absolute;
    left: calc(-${border}px / 2);
    top: calc(-${border}px / 2);
    width: calc(${size}px + ${border}px);
    height: calc(${size}px + ${border}px);
    border-radius: 50%;
    animation: pulse 1.5s infinite ease-in;
  }
  @keyframes pulse {
    from {
      transform: scale(0.5);
      opacity: 1;
    }
    to {
      transform: scale(1);
      opacity: 0;
    }
  }
`

interface Props {
  gradient: boolean
}

const WEEKDAY_LIST = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH_LIST = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const getCurrentTime = () => {
  const today = new Date()
  const day = today.getDay()

  const date = today.getDate()
  const month = today.getMonth()
  let hours = today.getHours()
  const minutes = today.getMinutes()
  const AM_PM = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  const minutesStr = minutes < 10 ? '0' + minutes : minutes

  return `${WEEKDAY_LIST[day]} ${date} ${MONTH_LIST[month]} \xa0${hours}:${minutesStr} ${AM_PM}`
}

export const StatusCenter = ({ gradient }: Props) => {
  return (
    <Container gradient={gradient}>
      <StatusIndicator>
        Site status: ON
        <LEDLight />
      </StatusIndicator>
      <span>{getCurrentTime()}</span>
    </Container>
  )
}
