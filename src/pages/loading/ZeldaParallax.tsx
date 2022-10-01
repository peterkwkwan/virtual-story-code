import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Parallax from 'parallax-js'

import layer1 from '!/assets/images/parallax/layer_01.png'
import layer2 from '!/assets/images/parallax/layer_02.png'
import layer3 from '!/assets/images/parallax/layer_03.png'
import layer4 from '!/assets/images/parallax/layer_04.png'
import layer5 from '!/assets/images/parallax/layer_05.png'
import layer6 from '!/assets/images/parallax/layer_06.png'
import layer7 from '!/assets/images/parallax/layer_07.png'

const Container = styled.div<{ showLoadingPage: boolean }>`
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.palette.dark01};
  display: flex;
  max-height: 100vh;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${(props) => !props.showLoadingPage && 'switchPage 3s forwards'};
  -webkit-animation: ${(props) =>
    !props.showLoadingPage && 'switchPage 3s forwards'};
  @keyframes switchPage {
    10% {
      transform: scale(1, 0.005);
      opacity: 1;
    }
    50% {
      transform: scale(0.5, 0.002);
    }
    100% {
      transform: scale(0.2, 0.002);
      opacity: 0;
      z-index: -1;
      display: "none";
    }
  }
`

const ParallaxContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
`

const ZeldaImg = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  object-fit: cover;
`

interface Props {
  showLoadingPage: boolean;
}

const ZeldaParallax = ({ showLoadingPage }: Props) => {
  const [parallaxScene, setParallaxScene] = useState<Parallax>()

  useEffect(() => {
    if(!parallaxScene){
      const sceneNode = document.getElementById('zeldaParallax')
  
      if (sceneNode) {
        setParallaxScene(new Parallax(sceneNode))
      }
    }

    return (): void => {
      parallaxScene?.disable()
    }
  }, [])
  
  return (
    <Container showLoadingPage={showLoadingPage}>
      <ParallaxContainer id="zeldaParallax">
        <ImgContainer data-depth="1">
          <ZeldaImg src={layer7} />
        </ImgContainer>
        <ImgContainer data-depth="0.9">
          <ZeldaImg src={layer6} />
        </ImgContainer>
        <ImgContainer data-depth="0.7">
          <ZeldaImg src={layer5} />
        </ImgContainer>
        <ImgContainer data-depth="0.4">
          <ZeldaImg src={layer4} />
        </ImgContainer>
        <ImgContainer data-depth="0.3">
          <ZeldaImg src={layer3} />
        </ImgContainer>
        <ImgContainer data-depth="0.2">
          <ZeldaImg src={layer2} />
        </ImgContainer>
        <ImgContainer data-depth="0.1">
          <ZeldaImg src={layer1} />
        </ImgContainer>
      </ParallaxContainer>
    </Container>
  )
}

export default memo(ZeldaParallax)