import React, { useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
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

import { useLastContributed } from '@/hooks/useLastContributed'

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

import { Tracker } from '@/hooks/useIntersectionObserver'
import { useBoundStore } from '@/hooks/useBoundStore'

type SpeechBubbleLayerProps = { show: string }

const SpeechBubbleParallaxLayer = styled(ParallaxLayer)<SpeechBubbleLayerProps>`
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
  opacity: ${(props) => (props.show === 'true' ? 1 : 0)};
  transition: opacity 0.5s;
`

const CareerContainer = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  background-color: white;
  height: 500px;
`

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
  { layer: layer4, zIndex: -1, offset: 1.05 },
  { layer: layer5, zIndex: 1, offset: 1.2 },
  { layer: layer6, zIndex: 2, offset: 1.25 },
  { layer: layer7, zIndex: 3, offset: 1.35 },
  { layer: layer8, zIndex: 4, offset: 1.8 },
  { layer: layer9, zIndex: 3, offset: 1.95 },
  { layer: layer10, zIndex: 1, offset: 1.95 },
]

export const Home = () => {
  const theme = useTheme()
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  const [showCareer, setShowCareer] = useState(false)

  const visibility = useBoundStore((state) => state.visibility)
  const showSpeechBubble = visibility[Tracker.SPEECH_BUBBLE]

  const parallax = useRef<IParallax>(null)
  const speechBubbleStart = 2
  const myCareerPage = 4
  const numberOfPages = showCareer ? 6 : 3

  const handleFinishSpeech = () => {
    setShowCareer(true)
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

          {LAYERS.map(({ layer, zIndex, offset }, i) => {
            const speed = 0.15 * (i + 1)
            return (
              <ParallaxLayer
                key={`layer${i}`}
                offset={offset}
                speed={speed}
                style={{ zIndex }}
              >
                <Image src={layer} />
              </ParallaxLayer>
            )
          })}
          <SpeechBubbleParallaxLayer
            offset={speechBubbleStart}
            sticky={{ start: speechBubbleStart, end: 3 }}
            show={showSpeechBubble ? 'true' : 'false'}
          >
            <SpeechBubble finishSpeechCallback={handleFinishSpeech} />
          </SpeechBubbleParallaxLayer>
          <IntersectionTrackerLayer
            offset={2.9}
            threshold={1}
            uniqueId={Tracker.SPEECH_BUBBLE}
          />
          <ParallaxLayer
            offset={myCareerPage}
            sticky={{ start: myCareerPage, end: 4.5 }}
            style={{
              backgroundColor: theme.palette.darkOrange,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              display: showCareer ? 'flex' : 'none',
            }}
          >
            <Title />
            <ScrollPrompt />
          </ParallaxLayer>
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
        {/* <CareerContainer show={showCareer}>HELLO</CareerContainer> */}
      </ExplorerWrapper>
    </>
  )
}
