import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin-top: 10%;
  border-radius: 10rem;
  background-color: rgba(0, 0, 0, 0.5);
  height: 8rem;
  width: 80%;
  &:before {
    content: '';
    height: 6rem;
    border-left: 2px solid white;
    border-radius: 24px;
  }
`

const DescriptionText = styled.h6`
  color: ${(props) => props.theme.palette.dark01};
  font-size: 40px;
`
export const Description = () => {
  return (
    <Container>
      <DescriptionText>My name weifowenfowiefniowneifewf</DescriptionText>
    </Container>
  )
}
