import React from 'react'
import styled from 'styled-components'
import { ParallaxLayerProps, ParallaxLayer } from '@react-spring/parallax'

interface PlanetProps {
  small?: boolean
  medium?: boolean
  large?: boolean
}

type Props = ParallaxLayerProps & PlanetProps

const Planet = styled.img<PlanetProps>`
  width: 20%;
  width: ${(props) => props.small && '30%'};
  width: ${(props) => props.medium && '40%'};
  width: ${(props) => props.large && '50%'};
  filter: brightness(40%);
  transition: width 2s;
`

export const PlanetLayer = (props: Props) => {
  const { small, medium, large, ...rest } = props
  const planetProps = { small, medium, large }

  return (
    <ParallaxLayer
      {...rest}
      style={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'end',
      }}
    >
      <Planet {...planetProps} src="/assets/images/home/planet.png" />
    </ParallaxLayer>
  )
}
