import React from 'react'
import styled from 'styled-components'
import TypewriterComponent from 'typewriter-effect'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import { useLastContributed } from '../../hooks/useLastContributed'
import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { DarkBlueText, LineBreak } from './shared/StyledText'

import layer1 from '!/assets/images/parallax/layer_01.png'
import layer2 from '!/assets/images/parallax/layer_02.png'
import layer3 from '!/assets/images/parallax/layer_03.png'
import layer4 from '!/assets/images/parallax/layer_04.png'
import layer5 from '!/assets/images/parallax/layer_05.png'
import layer6 from '!/assets/images/parallax/layer_06.png'
import layer7 from '!/assets/images/parallax/layer_07.png'

export const Readme = () => {
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  const yearsOnly = diff.slice(0, 1)

  return (
    <>
      <ExplorerWrapper contributors={contributors} numberOfLines={27}>
        <DarkBlueText>## virtual story code</DarkBlueText>
        <LineBreak />
        <Parallax pages={2} style={{ position: 'relative', top: '0', left: '0',}}>
         
          <ParallaxLayer
            offset={0}
            speed={1.4}
            factor={1.2}
            style={{ backgroundImage: `url(${layer7})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={1.3}
            factor={1.2}
            style={{ backgroundImage: `url(${layer6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={1.3}
            factor={1.2}
            style={{   backgroundImage: `url(${layer5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={1.2}
            factor={1.2}
            style={{  zIndex: 2, backgroundImage: `url(${layer4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={1.2}
            factor={1.2}
            style={{  zIndex: 3,  backgroundImage: `url(${layer3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={1.2}
            style={{ zIndex: 4, backgroundImage: `url(${layer2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={1.2}
            style={{ zIndex: 5, backgroundImage: `url(${layer1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
          </ParallaxLayer>
    
       

          <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <p>Scroll up</p>
          </ParallaxLayer>
        </Parallax>

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
