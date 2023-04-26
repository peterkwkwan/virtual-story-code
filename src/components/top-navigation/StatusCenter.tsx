import React from 'react'
import styled from 'styled-components'

const Container = styled.div<{ gradient: boolean }>`
  color: ${(props) =>
    props.gradient ? props.theme.palette.dark01 : props.theme.palette.white};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  margin-right: 16px;
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
  return <Container gradient={gradient}>{getCurrentTime()}</Container>
}
