import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from '@react-spring/parallax'

export const WorldPlanet = styled(ParallaxLayer)<{ eatIsVisible: boolean }>`
  color: white;
  z-index: 2;
  background-color: ${(props) =>
    props.eatIsVisible ? 'transparent' : props.theme.palette.darkBlueText};
  clip-path: ${(props) =>
    props.eatIsVisible ? 'circle(100%)' : 'circle(10%)'};
  transition: clip-path 1s, background-color 2s;
`
