import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from '@react-spring/parallax'

export const OrangeTriangle = styled(ParallaxLayer)<{ isVisible: boolean }>`
  color: white;
  z-index: 2;
  background-color: ${(props) =>
    props.isVisible
      ? props.theme.palette.blueText
      : props.theme.palette.darkOrange};
  clip-path: ${(props) =>
    props.isVisible
      ? 'polygon(0% 0%, 100% 0%, 50% 80%)'
      : 'polygon(0% 100%, 100% 100%, 50% 0%)'};
  transition: clip-path 1s;
`
