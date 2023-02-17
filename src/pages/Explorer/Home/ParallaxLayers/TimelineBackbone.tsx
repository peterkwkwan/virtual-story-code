import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Backbone = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MarioVine = styled.img`
  height: 100%;
`

export const TimelineBackbone = () => {
  return (
    <Container>
      <Backbone>
        <MarioVine src="/assets/images/mario-vine.svg" alt="mario-vine" />
      </Backbone>
    </Container>
  )
}
