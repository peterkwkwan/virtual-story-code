import React, { useRef } from 'react'
import styled from 'styled-components'
import {
  Parallax as ParallaxSpring,
  ParallaxLayer,
  IParallax,
} from '@react-spring/parallax'

import { ExplorerWrapper } from '../shared/ExplorerWrapper'
import { Intro } from './ParallaxLayers/Intro/Intro'
import { TimelineBackbone } from './ParallaxLayers/Timeline/TimelineBackbone'
import {
  SpeechBubble,
  SpeechBubbleParallaxLayer,
  TypewriterStringToRender,
} from './ParallaxLayers/SpeechBubble/SpeechBubble'
import { ParallaxStars } from './ParallaxLayers/Intro/ParallaxStars'
import { Title } from './ParallaxLayers/MyCareer/Title'
import { ScrollPrompt } from './ParallaxLayers/shared/ScrollPrompt'
import { IntersectionTrackerLayer } from './ParallaxLayers/shared/IntersectionTrackerLayer'
import { MovingMario } from './ParallaxLayers/Intro/MovingMario'
import { ParallaxMountains } from './ParallaxLayers/Intro/ParallaxMountains'

import { Tracker } from '@/hooks/useIntersectionObserver'
import { useBoundStore } from '@/hooks/useBoundStore'

const CareerParallaxLayer = styled(ParallaxLayer)`
  background-color: ${(props) => props.theme.palette.darkOrange};
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Home = () => {
  const speechIndex = useBoundStore((state) => state.speechIndex)
  const finalSpeechText = speechIndex === TypewriterStringToRender.length - 1

  const parallax = useRef<IParallax>(null)
  const speechBubbleStart = 2
  const myCareerPage = 4
  const numberOfPages = 7

  const handleFinishSpeech = () => {
    if (parallax.current) {
      {
        parallax.current.scrollTo(myCareerPage)
      }
    }
  }

  return (
    <>
      <ExplorerWrapper>
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

          <SpeechBubbleParallaxLayer
            offset={speechBubbleStart}
            sticky={{ start: 2, end: 2.9 }}
            flicker={finalSpeechText.toString()}
          >
            <SpeechBubble finishSpeechCallback={handleFinishSpeech} />
          </SpeechBubbleParallaxLayer>

          <IntersectionTrackerLayer
            offset={2.9}
            threshold={1}
            uniqueId={Tracker.SPEECH_BUBBLE}
          />
          <CareerParallaxLayer
            offset={myCareerPage}
            sticky={{ start: myCareerPage, end: 4.5 }}
          >
            <Title />
            <ScrollPrompt />
          </CareerParallaxLayer>

          <ParallaxLayer offset={5} sticky={{ start: 5, end: 7 }}>
            <TimelineBackbone />
          </ParallaxLayer>
        </ParallaxSpring>
      </ExplorerWrapper>
    </>
  )
}
