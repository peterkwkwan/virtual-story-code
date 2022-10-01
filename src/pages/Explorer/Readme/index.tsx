import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TypewriterComponent from 'typewriter-effect'
import {
  Parallax as ParallaxSpring,
  ParallaxLayer,
} from '@react-spring/parallax'

import { useLastContributed } from '../../../hooks/useLastContributed'
import { ExplorerWrapper } from '../shared/ExplorerWrapper'
import { IntroLayer } from './ParallaxLayers/IntroLayer'
import { Identity } from './ParallaxLayers/Identity'

export const Readme = () => {
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  const yearsOnly = diff.slice(0, 1)

  return (
    <>
      <ExplorerWrapper
        emptyContainer
        contributors={contributors}
        numberOfLines={27}
      >
        <ParallaxSpring
          pages={6}
          style={{ position: 'relative',  top: '0', left: '0' }}
        >
          <ParallaxLayer
            offset={0}
            speed={0}
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
            }}
          >
          </ParallaxLayer>

          <ParallaxLayer
            offset={5}
            speed={1}
            style={{ backgroundColor: '#ff6d6d' }}
          />
        </ParallaxSpring>
        {/* <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .changeDelay(35)
              .typeString(
                'Hello! My name is <span style="color: #4ec9b0;"><strong>Peter Kwan</strong></span>.<br/><br/>'
              )
              .pauseFor(400)
              .typeString(
                'This is my <span style="color: #c586c0;">Virtual Story Code</span> (a.k.a. personal website).<br/><br/>'
              )
              .pauseFor(400)
              .typeString(
                'Inspired by Microsoft\'s <span style="color: #569cd6;">Visual Studio Code</span>, I created this project to showcase my creativity and portfolio.<br/><br/>'
              )
              .pauseFor(400)
              .typeString(
                `I'm a self-taught developer, with over ${yearsOnly} years of experience in frontend development.<br/><br/>`
              )
              .pauseFor(400)
              .typeString(
                'I hope this inspires you to create something <span style="color: #ffd700;">AWESOME</span> today!'
              )
              .start()
          }}
        /> */}
      </ExplorerWrapper>
    </>
  )
}
