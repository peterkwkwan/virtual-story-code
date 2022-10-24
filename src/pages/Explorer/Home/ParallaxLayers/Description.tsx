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
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
