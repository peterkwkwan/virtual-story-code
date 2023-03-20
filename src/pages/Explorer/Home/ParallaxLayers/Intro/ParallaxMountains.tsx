import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

import layer1 from '/assets/images/parallax/home/layer_01.png'
import layer2 from '/assets/images/parallax/home/layer_02.png'
import layer3 from '/assets/images/parallax/home/layer_03.png'
import layer4 from '/assets/images/parallax/home/layer_04.png'
import layer5 from '/assets/images/parallax/home/layer_05.png'
import layer6 from '/assets/images/parallax/home/layer_06.png'
import layer7 from '/assets/images/parallax/home/layer_07.png'
import layer8 from '/assets/images/parallax/home/layer_08.png'
import layer9 from '/assets/images/parallax/home/layer_09.png'
import layer10 from '/assets/images/parallax/home/layer_10.png'

import styled from 'styled-components'

const Image = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const LAYERS = [
  { layer: layer1, zIndex: 1, offset: 1 },
  { layer: layer2, zIndex: 1, offset: 1.05 },
  { layer: layer3, zIndex: 1, offset: 1.05 },
  { layer: layer4, zIndex: -1, offset: 1.05, useImage: true },
  { layer: layer5, zIndex: 1, offset: 1.25 },
  { layer: layer6, zIndex: 2, offset: 1.25 },
  { layer: layer7, zIndex: 3, offset: 1.35 },
  { layer: layer8, zIndex: 4, offset: 1.8 },
  { layer: layer9, zIndex: 3, offset: 1.95 },
  { layer: layer10, zIndex: 1, offset: 1.95 },
]

export const ParallaxMountains = () => {
  return (
    <>
      {LAYERS.map(({ layer, zIndex, offset, useImage }, i) => {
        const speed = 0.15 * (i + 1)
        return (
          <ParallaxLayer
            key={`layer${i}`}
            offset={offset}
            speed={speed}
            style={{
              zIndex,
              background: useImage
                ? ''
                : `url(${layer}) center center / cover no-repeat`,
            }}
          >
            {useImage && <Image src={layer} />}
          </ParallaxLayer>
        )
      })}
    </>
  )
}
