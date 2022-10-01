import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Header = styled.h3`
    position: absolute;
    bottom: 20%;
`
export const Identity = ({identity} : {identity: string}) => {
  return (
    <Container>
      <Header>
        {identity}
      </Header>
    </Container>
  )
}
