import React, { useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import {
  Parallax as ParallaxSpring,
  ParallaxLayer,
  IParallax
} from '@react-spring/parallax'

import { useLastContributed } from '../../../hooks/useLastContributed'
import { ExplorerWrapper } from '../shared/ExplorerWrapper'
import { Intro } from './ParallaxLayers/Intro'
import { Identity } from './ParallaxLayers/Identity'
import { TimelineBackbone } from './ParallaxLayers/TimelineBackbone'
import { SpeechBubble } from './ParallaxLayers/SpeechBubble'
import { ParallaxStars } from './ParallaxLayers/ParallaxStars'
import { Title } from './ParallaxLayers/MyCareer/Title'


const SpeechBubbleParallaxLayer = styled(ParallaxLayer)`
  background-color: ${props => props.theme.palette.persianGreen};
  clip-path: polygon(0% 7%, 100% 0%, 82% 48%, 18% 48%, 14% 56.3%, 14% 48%, 4% 48%);
`

const TimelineParallaxLayer = styled(ParallaxLayer)`
   background-color: ${props => props.theme.palette.deepPink};
`

export const Home = () => {
  const theme = useTheme()
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  const parallax = useRef<IParallax>(null)
  const myCareerPage = 7

  const handleScrollToCallback = () => {
    if (parallax.current) {
      parallax.current.scrollTo(myCareerPage)
    }
  }

  return (
    <>
      <ExplorerWrapper
        emptyContainer
        contributors={contributors}
        numberOfLines={27}
      >
        <ParallaxSpring
          ref={parallax}
          pages={10}
          style={{ position: 'relative',  top: '0', left: '0' }}
        >
          <ParallaxLayer
            offset={0}
            speed={1}
          >
            <ParallaxStars/>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            sticky={{start: 0, end: 4}}
            style={{
              color: 'white',
              zIndex: 10
            }}
          >
            <Intro/>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={1}
            sticky={{start: 1, end: 4}}
            style={{
              color: 'white',
              zIndex: 2,
              backgroundColor: theme.palette.darkOrange,
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 80%)'
            }}
          />
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
            speed={0.1}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.palette.vsCodeBlue,
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%, 50% 100%)'
            }}
          />
          <SpeechBubbleParallaxLayer
            offset={5}
            speed={0.2}
            sticky={{start: 5, end: 6}}
          >
            <SpeechBubble scrollToCallback={handleScrollToCallback}/>
          </SpeechBubbleParallaxLayer>
          <ParallaxLayer
            offset={myCareerPage}
            speed={1.5}
            sticky={{start: 7, end: 8.5}}
            style={{ 
              backgroundColor: theme.palette.darkOrange,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', }}
          >
            <Title/>
          </ParallaxLayer>
          <TimelineParallaxLayer
            offset={8.5}
            speed={0}
            sticky={{start: 8.5, end: 10}}
          >
            <TimelineBackbone/>
          </TimelineParallaxLayer>
        </ParallaxSpring>
      </ExplorerWrapper>
    </>
  )
}
