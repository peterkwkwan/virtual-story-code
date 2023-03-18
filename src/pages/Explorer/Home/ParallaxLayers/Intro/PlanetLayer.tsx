import React from 'react'
import styled from 'styled-components'
import { ParallaxLayerProps, ParallaxLayer } from '@react-spring/parallax'

const Planet = styled.img`
  width: 50%;
  filter: brightness(40%);
  transition: width 2s;
`

export const PlanetLayer = (props: ParallaxLayerProps) => {
  return (
    <ParallaxLayer
      {...props}
      style={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'end',
      }}
    >
      <Planet src="/assets/images/home/planet.png" />
    </ParallaxLayer>
  )
}
