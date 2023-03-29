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
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  background: hsl(0, 0%, 100%);
`

export const Home = () => {
  const [showCareer, setShowCareer] = useState(false)

  const speechIndex = useBoundStore((state) => state.speechIndex)
  const finalSpeechText = speechIndex === TypewriterStringToRender.length - 1

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
