import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import {
  Parallax as ParallaxSpring,
  ParallaxLayer,
  IParallax,
} from '@react-spring/parallax'

import { ExplorerWrapper } from '../shared/ExplorerWrapper'
import { Intro } from './ParallaxLayers/Intro/Intro'
import { TimelineBackbone } from './ParallaxLayers/Timeline/TimelineBackbone'
import { SpeechBubble } from './ParallaxLayers/SpeechBubble/SpeechBubble'
import { ParallaxStars } from './ParallaxLayers/Intro/ParallaxStars'
import { Title } from './ParallaxLayers/MyCareer/Title'
import { ScrollPrompt } from './ParallaxLayers/shared/ScrollPrompt'
import { IntersectionTrackerLayer } from './ParallaxLayers/shared/IntersectionTrackerLayer'
import { MovingMario } from './ParallaxLayers/Intro/MovingMario'
import { ParallaxMountains } from './ParallaxLayers/Intro/ParallaxMountains'

import { useLastContributed } from '@/hooks/useLastContributed'
import { Tracker } from '@/hooks/useIntersectionObserver'

const CareerParallaxLayer = styled(ParallaxLayer)`
  background-color: ${(props) => props.theme.palette.darkOrange};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  background: hsl(0, 0%, 100%);
`

export const Home = () => {
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  const [showCareer, setShowCareer] = useState(false)

  const parallax = useRef<IParallax>(null)
  const speechBubbleStart = 2
  const myCareerPage = 4
  const numberOfPages = showCareer ? 6 : 3

  const handleFinishSpeech = () => {
    setShowCareer(true)
    if (parallax.current) {
      {
        parallax.current.scrollTo(myCareerPage)
      }
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
          id="parallax-scroll-id"
          pages={numberOfPages}
          style={{ position: 'relative', top: '0', left: '0' }}
        >
          <ParallaxLayer offset={0} speed={1}>
            <ParallaxStars />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ zIndex: 2 }}
            sticky={{ start: 0, end: 1.2 }}
          >
            <Intro />
          </ParallaxLayer>
          <IntersectionTrackerLayer
            offset={2.2}
            uniqueId={Tracker.INTRO}
            threshold={1}
          />
          <ParallaxLayer offset={0} sticky={{ start: 0, end: 3 }}>
            <MovingMario
              parallax={parallax}
              numberOfPages={numberOfPages}
              speechBubbleStart={speechBubbleStart}
            />
          </ParallaxLayer>

          <ParallaxMountains />

          <SpeechBubble
            finishSpeechCallback={handleFinishSpeech}
            speechBubbleStart={speechBubbleStart}
          />

          <IntersectionTrackerLayer
            offset={2.9}
            threshold={1}
            uniqueId={Tracker.SPEECH_BUBBLE}
          />
          <CareerParallaxLayer
            offset={myCareerPage}
            sticky={{ start: myCareerPage, end: 4.5 }}
            style={{ display: showCareer ? 'flex' : 'none' }}
          >
            <Title />
            <ScrollPrompt />
          </CareerParallaxLayer>
          <ParallaxLayer
            offset={5}
            sticky={{ start: 5, end: 6 }}
            style={{
              display: showCareer ? 'block' : 'none',
            }}
          >
            <TimelineBackbone />
          </ParallaxLayer>
        </ParallaxSpring>
      </ExplorerWrapper>
    </>
  )
}
