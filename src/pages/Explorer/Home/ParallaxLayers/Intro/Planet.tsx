import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from '@react-spring/parallax'

interface Props {
  small?: boolean
  medium?: boolean
  large?: boolean
}

export const Planet = styled(ParallaxLayer)<Props>`
  background-color: ${(props) => props.theme.palette.marioGreen};
  clip-path: circle(5%);
  clip-path: ${(props) => props.small && 'circle(15%)'};
  clip-path: ${(props) => props.medium && 'circle(25%)'};
  clip-path: ${(props) => props.large && 'circle(35%)'};
  transition: clip-path 2s;
`
