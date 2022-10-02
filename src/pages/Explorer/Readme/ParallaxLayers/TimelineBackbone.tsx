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
    width: 12px;
    height: 100%;
    background: ${props => props.theme.palette.dark01};

`
export const TimelineBackbone = () => {
  return (
    <Container><Backbone/></Container>
  )
}
