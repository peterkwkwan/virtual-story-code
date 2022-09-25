import React, { memo } from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
    flex-grow: 1;
    font-family: League Spartan;
    text-align: center;
    object-fit: contain;
    font-weight: 200;
    font-size: 4rem;
    ::first-letter{
        font-weight: 600;
    }
`

const Logo = () => {
  return (
    <StyledH1>Peter Kwan</StyledH1>
  )
}

export default memo(Logo)