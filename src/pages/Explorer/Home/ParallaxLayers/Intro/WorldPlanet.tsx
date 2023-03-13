import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from '@react-spring/parallax'

export const WorldPlanet = styled(ParallaxLayer)<{ show: boolean }>`
  color: white;
  z-index: 2;
  background-color: ${(props) =>
    props.show
      ? props.theme.palette.persianGreen
      : props.theme.palette.darkBlueText};
  clip-path: ${(props) => (props.show ? 'circle(35%)' : 'circle(10%)')};
  transition: clip-path 1s, background-color 2s;
`
