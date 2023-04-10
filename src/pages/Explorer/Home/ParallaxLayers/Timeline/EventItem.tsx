import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 300px;
  user-select: none;
`

const InnerContainer = styled.div`
  position: relative;
  top: -30px;
  left: 10px;
  width: 100%;
  height: 100px;
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.dark02};
`

const Title = styled.h3`
  position: relative;
  z-index: 1;
  width: fit-content;
  margin: 0;
  padding: 8px 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

interface Props {
  title: string
}

export const EventItem = ({ title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InnerContainer></InnerContainer>
    </Container>
  )
}
