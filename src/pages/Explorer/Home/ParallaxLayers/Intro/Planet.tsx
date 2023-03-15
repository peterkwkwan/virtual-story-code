import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from '@react-spring/parallax'

export const Planet = styled(ParallaxLayer)<{ expand: boolean }>`
  background-color: ${(props) =>
    props.expand
      ? props.theme.palette.marioBlue
      : props.theme.palette.marioGreen};
  clip-path: ${(props) => (props.expand ? 'circle(32%)' : 'circle(10%)')};
  transition: clip-path 1s, background-color 2s;
`
