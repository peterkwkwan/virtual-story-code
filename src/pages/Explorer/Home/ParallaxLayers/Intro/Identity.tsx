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
  bottom: 10%;
  text-transform: uppercase;
  font-family: 'League Spartan';
  font-size: 2rem;
  font-weight: 700;
  color: white;
`

type Props = { identity: string }

export const Identity = React.forwardRef<HTMLHeadingElement, Props>(
  ({ identity }, ref) => {
    return (
      <Container>
        {ref ? (
          <Header ref={ref}>- {identity} -</Header>
        ) : (
          <Header>- {identity} -</Header>
        )}
      </Container>
    )
  }
)
