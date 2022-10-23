import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin-left: 5%;
margin-top: 5%;
  border-radius: 15rem;
  background-color: rgba(0, 0, 0, 0.5);
  height: 50%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerBorder = styled.div`
  height: 85%;
  width: 95%;
  border-left: 1px solid white;  
  border-right: 1px solid white;
  border-radius: 15rem;
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
