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

import layer1 from '/assets/images/parallax/home/layer_01.png'
import layer2 from '/assets/images/parallax/home/layer_02.png'
import layer3 from '/assets/images/parallax/home/layer_03.png'
import layer4 from '/assets/images/parallax/home/layer_04.png'
import layer5 from '/assets/images/parallax/home/layer_05.png'
import layer6 from '/assets/images/parallax/home/layer_06.png'
import layer7 from '/assets/images/parallax/home/layer_07.png'
import layer8 from '/assets/images/parallax/home/layer_08.png'

type SpeechBubbleLayerProps = { showspeechbubble: string }

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
  opacity: ${(props) => (props.showspeechbubble === 'true' ? 1 : 0)};
  transition: opacity 0.5s;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const LAYERS = [
  { layer: layer1, zIndex: 3, offset: 4 },
  { layer: layer2, zIndex: 3, offset: 4.1 },
  { layer: layer3, zIndex: 3, offset: 4.1 },
  { layer: layer4, zIndex: 2, offset: 4.1 },
  { layer: layer5, zIndex: 3, offset: 4.2 },
  { layer: layer6, zIndex: 3, offset: 4.3 },
  { layer: layer7, zIndex: 3, offset: 4.4 },
  { layer: layer8, zIndex: 3, offset: 4.95 },
]

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

  const [showspeechbubble, setshowspeechbubble] = useState(false)
  const speechBubbleStart = 5

  const parallax = useRef<IParallax>(null)
  const numberOfPages = 10
  const myCareerPage = 7

  useEffect(() => {
    setshowspeechbubble(false)
  }, [speechBubbleVisible])

  const handleScrollToCallback = () => {
    if (parallax.current) {
      parallax.current.scrollTo(myCareerPage)
    }
  }

  const handleshowspeechbubble = () => {
    setshowspeechbubble(true)
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
            sticky={{ start: 0, end: 4 }}
            style={{
              color: 'white',
              zIndex: 10,
            }}
          >
            <Intro showName={codeIsVisible || eatIsVisible || sleepIsVisible} />
          </ParallaxLayer>

          <PlanetLayer offset={2} />
          <ParallaxLayer
            offset={0}
            sticky={{ start: 0, end: 6 }}
            style={{
              zIndex: 1,
            }}
          >
            <MovingMario
              handleshowspeechbubble={handleshowspeechbubble}
              parallax={parallax}
              numberOfPages={numberOfPages}
              speechBubbleStart={speechBubbleStart}
            />
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
          {LAYERS.map(({ layer, zIndex, offset }, i) => {
            const speed = 0.1 * (i + 1)
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
          <IntersectionTrackerLayer
            offset={5.5}
            sticky={{ start: 5.5, end: 6 }}
            uniqueId="speechBubbleStart"
            threshold={1}
          />
          <SpeechBubbleParallaxLayer
            offset={5}
            speed={0.2}
            sticky={{ start: speechBubbleStart, end: 6 }}
            style={{
              zIndex: 1,
            }}
            showspeechbubble={showspeechbubble ? 'true' : 'false'}
          >
            <SpeechBubble
              scrollToCallback={handleScrollToCallback}
              showspeechbubble={showspeechbubble}
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
