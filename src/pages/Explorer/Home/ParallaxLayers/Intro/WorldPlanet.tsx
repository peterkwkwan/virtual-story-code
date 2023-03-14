import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from '@react-spring/parallax'

export const WorldPlanet = styled(ParallaxLayer)<{ expand: boolean }>`
  color: white;
  background-color: ${(props) =>
    props.expand
      ? props.theme.palette.persianGreen
      : props.theme.palette.darkBlueText};
  clip-path: ${(props) => (props.expand ? 'circle(35%)' : 'circle(10%)')};
  transition: clip-path 1s, background-color 2s;
`
