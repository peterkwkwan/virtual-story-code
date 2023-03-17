import React, { useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import {
  Parallax as ParallaxSpring,
  ParallaxLayer,
  IParallax,
} from '@react-spring/parallax'

import { ExplorerWrapper } from '../shared/ExplorerWrapper'
import { Intro } from './ParallaxLayers/Intro/Intro'
import { Identity } from './ParallaxLayers/Intro/Identity'
import { TimelineBackbone } from './ParallaxLayers/Timeline/TimelineBackbone'
import { SpeechBubble } from './ParallaxLayers/SpeechBubble/SpeechBubble'
import { ParallaxStars } from './ParallaxLayers/Intro/ParallaxStars'
import { Title } from './ParallaxLayers/MyCareer/Title'
import { ScrollPrompt } from './ParallaxLayers/shared/ScrollPrompt'
import { IDENTITY } from './ParallaxLayers/shared/constants'
import { PlanetLayer } from './ParallaxLayers/Intro/PlanetLayer'
import { IntersectionTrackerLayer } from './ParallaxLayers/shared/IntersectionTrackerLayer'
import { MovingMario } from './ParallaxLayers/Intro/MovingMario'

import { useLastContributed } from '@/hooks/useLastContributed'
import { useStore } from '@/hooks/useStore'

const SpeechBubbleParallaxLayer = styled(ParallaxLayer)<{
  showSpeechBubble: boolean
}>`
  background-color: ${(props) => props.theme.palette.text01};
  clip-path: polygon(
    0% 5%,
    100% 0%,
    82% 48%,
    18% 48%,
    14% 56.3%,
    14% 48%,
    4% 48%
  );
  opacity: ${(props) => (props.showSpeechBubble ? 1 : 0)};
  transition: opacity 0.5s;
`

export const Home = () => {
  const theme = useTheme()
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  const visibility = useStore((state) => state.visibility)
  const eatIsVisible = visibility[IDENTITY.EAT]
  const sleepIsVisible = visibility[IDENTITY.SLEEP]
  const codeIsVisible = visibility[IDENTITY.CODE]
  const speechBubbleVisible = visibility['speechBubbleStart']

  const [showSpeechBubble, setShowSpeechBubble] = useState(false)

  useEffect(() => {
    setShowSpeechBubble(false)
  }, [speechBubbleVisible])

  const parallax = useRef<IParallax>(null)
  const myCareerPage = 7

  const handleScrollToCallback = () => {
    if (parallax.current) {
      parallax.current.scrollTo(myCareerPage)
    }
  }

  const handleShowSpeechBubble = () => {
    setShowSpeechBubble(true)
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
          style={{ position: 'relative', top: '0', left: '0' }}
        >
          <ParallaxLayer offset={0} speed={1}>
            <ParallaxStars />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            sticky={{ start: 0, end: 4 }}
            style={{
              color: 'white',
              zIndex: 10,
            }}
          >
            <Intro showName={codeIsVisible || eatIsVisible || sleepIsVisible} />
          </ParallaxLayer>

          <PlanetLayer
            offset={0.5}
            sticky={{ start: 0.5, end: 6 }}
            small={eatIsVisible}
            medium={sleepIsVisible}
            large={codeIsVisible || speechBubbleVisible}
          />
          <ParallaxLayer
            offset={0}
            sticky={{ start: 0, end: 6 }}
            style={{
              zIndex: speechBubbleVisible ? 1 : 0,
            }}
          >
            <MovingMario handleShowSpeechBubble={handleShowSpeechBubble} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={1}
            sticky={{ start: 1, end: 2 }}
            style={{
              zIndex: 1,
            }}
          >
            <Identity identity={IDENTITY.EAT} hide={sleepIsVisible} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.5}
            speed={1}
            sticky={{ start: 2, end: 3 }}
            style={{
              zIndex: 1,
            }}
          >
            <Identity identity={IDENTITY.SLEEP} hide={codeIsVisible} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3.5}
            speed={1}
            sticky={{ start: 3, end: 4 }}
            style={{
              zIndex: 1,
            }}
          >
            <Identity identity={IDENTITY.CODE} />
          </ParallaxLayer>
          <IntersectionTrackerLayer
            offset={5.5}
            sticky={{ start: 5.5, end: 6 }}
            uniqueId="speechBubbleStart"
            threshold={1}
          />
          <SpeechBubbleParallaxLayer
            offset={5}
            speed={0.2}
            sticky={{ start: 5, end: 6 }}
            style={{
              zIndex: 1,
            }}
            showSpeechBubble={showSpeechBubble}
          >
            <SpeechBubble
              scrollToCallback={handleScrollToCallback}
              showSpeechBubble={showSpeechBubble}
            />
          </SpeechBubbleParallaxLayer>
          <ParallaxLayer
            offset={myCareerPage}
            speed={0.1}
            sticky={{ start: 7, end: 7.5 }}
            style={{
              backgroundColor: theme.palette.darkOrange,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Title />
            <ScrollPrompt />
          </ParallaxLayer>
          <ParallaxLayer offset={8} sticky={{ start: 8, end: 10 }}>
            <TimelineBackbone />
          </ParallaxLayer>
        </ParallaxSpring>
      </ExplorerWrapper>
    </>
  )
}
