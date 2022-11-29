import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  font-family: "League Spartan";
  color: ${(props) => props.theme.palette.white};
  text-transform: uppercase;
`

const Header = styled.h3`
  font-weight: 400;
  font-size: 7rem;
  margin: 0;
`

const Subtitle = styled.h6`
  font-weight: 200;
  font-size: 2rem;
  margin: 0;
`

export const Title = () => {
  return (
    <Container>
      <Header>My Career</Header>
      <Subtitle>so far</Subtitle>
    </Container>
  )
}
