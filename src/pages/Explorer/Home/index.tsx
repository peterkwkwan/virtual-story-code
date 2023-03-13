import React, { useRef } from 'react'
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
import { WorldPlanet } from './ParallaxLayers/Intro/WorldPlanet'
import { Eat } from './ParallaxLayers/Intro/Eat'
import { Triangle } from './ParallaxLayers/Intro/Triangle'
import { Code } from './ParallaxLayers/Intro/Code'

import { useLastContributed } from '@/hooks/useLastContributed'
import { useStore } from '@/hooks/useStore'

const SpeechBubbleParallaxLayer = styled(ParallaxLayer)`
  background-color: ${(props) => props.theme.palette.persianGreen};
  clip-path: polygon(
    0% 5%,
    100% 0%,
    82% 48%,
    18% 48%,
    14% 56.3%,
    14% 48%,
    4% 48%
  );
`

export const Home = () => {
  const theme = useTheme()
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  const visibility = useStore((state) => state.visibility)
  const eatIsVisible = visibility[IDENTITY.EAT]
  const codeIsVisible = visibility[IDENTITY.CODE]

  console.log({ visibility })

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
            <Intro />
          </ParallaxLayer>
          <WorldPlanet
            offset={0.5}
            sticky={{ start: 0.5, end: 2 }}
            eatIsVisible={eatIsVisible}
          />
          <Triangle
            offset={1}
            speed={1}
            sticky={{ start: 1, end: 4 }}
            show={codeIsVisible || eatIsVisible}
          />
          <ParallaxLayer
            offset={1}
            speed={1}
            sticky={{ start: 1, end: 2.5 }}
            style={{
              zIndex: 1,
            }}
          >
            <Eat />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.5}
            speed={1}
            sticky={{ start: 2.5, end: 3.5 }}
            style={{
              zIndex: 1,
            }}
          >
            <Identity identity={IDENTITY.SLEEP} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3.5}
            speed={1}
            sticky={{ start: 3.5, end: 4 }}
            style={{
              zIndex: 1,
            }}
          >
            <Code />
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={0.1}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.palette.vsCodeBlue,
              clipPath: 'polygon(0% 0%, 50% 100%, 50% 0%)',
            }}
          />
          <ParallaxLayer
            offset={4}
            speed={0.1}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.palette.dark02,
              clipPath: 'polygon(50% 0%, 50% 100%, 100% 0%)',
            }}
          />
          <SpeechBubbleParallaxLayer
            offset={5}
            speed={0.2}
            sticky={{ start: 5, end: 6 }}
          >
            <SpeechBubble scrollToCallback={handleScrollToCallback} />
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
