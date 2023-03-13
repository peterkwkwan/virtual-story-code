import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from '@react-spring/parallax'

export const Triangle = styled(ParallaxLayer)<{ show: boolean }>`
  color: white;
  z-index: 2;
  background-color: ${(props) =>
    props.show ? props.theme.palette.darkBlueText : 'transparent'};
  clip-path: ${(props) =>
    props.show
      ? 'polygon(0% 0%, 100% 0%, 50% 80%)'
      : 'polygon(45% 0%, 55% 0%, 50% 0%)'};
  transition: clip-path 1s, background-color 1s;
`
