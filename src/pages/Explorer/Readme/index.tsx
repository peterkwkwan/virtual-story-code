import React from 'react'
import styled from 'styled-components'
import {
  Parallax as ParallaxSpring,
  ParallaxLayer,
} from '@react-spring/parallax'

import { useLastContributed } from '../../../hooks/useLastContributed'
import { ExplorerWrapper } from '../shared/ExplorerWrapper'
import { IntroLayer } from './ParallaxLayers/IntroLayer'
import { Identity } from './ParallaxLayers/Identity'
import { TimelineBackbone } from './ParallaxLayers/TimelineBackbone'
import { Description } from './ParallaxLayers/Description'

const TimelineParallaxLayer = styled(ParallaxLayer)`
   background-color: ${props => props.theme.palette.timelineBackgroundColor};
`

export const Readme = () => {
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  return (
    <>
      <ExplorerWrapper
        emptyContainer
        contributors={contributors}
        numberOfLines={27}
      >
        <ParallaxSpring
          pages={9}
          style={{ position: 'relative',  top: '0', left: '0' }}
        >
          <ParallaxLayer
            offset={0}
            speed={0.5}
            sticky={{start: 0, end: 4}}
            style={{
              color: 'white',
              zIndex: 10
            }}
          >
            <IntroLayer/>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={1}
            sticky={{start: 1, end: 2}}
            style={{
              zIndex: 1
            }}
          >
            <Identity identity='Developer'/>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={1}
            sticky={{start: 2, end: 3}}
            style={{
              zIndex: 1
            }}
          >
            <Identity identity='Tech enthusiast'/>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={1}
            sticky={{start: 3, end: 3.7}}
            style={{
              zIndex: 1
            }}
          >
            <Identity identity='Father'/>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={1}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)'

            }}
          />
          <TimelineParallaxLayer
            offset={5}
            speed={0}
          >
            <Description />
          </TimelineParallaxLayer>
          <TimelineParallaxLayer
            offset={6}
            speed={0}
            sticky={{start: 6, end: 8}}
          >
            <TimelineBackbone/>
          </TimelineParallaxLayer>
        </ParallaxSpring>
      </ExplorerWrapper>
    </>
  )
}
