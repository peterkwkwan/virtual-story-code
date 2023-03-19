import React from 'react'
import styled, { useTheme } from 'styled-components'

import useWindowDimensions from '@/hooks/useWindowDimensions'

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const Stars = styled.div<{
  shadows: string
  animationSeconds: number
  height: number
}>`
  box-shadow: ${(props) => props.shadows};
  animation: float ${(props) => props.animationSeconds}s linear infinite;
  @keyframes float {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }
    1% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    95% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: translateY(-${(props) => props.height}px);
    }
  }
`

const SmallStars = styled(Stars)`
  width: 1px;
  height: 1px;
`

const MediumStars = styled(Stars)`
  width: 2px;
  height: 2px;
`

const LargeStars = styled(Stars)`
  width: 3px;
  height: 3px;
`

export const ParallaxStars = () => {
  const theme = useTheme()
  const { height, width } = useWindowDimensions()

  const generateStars = (numberOfstars: number, isSmall?: string) => {
    const initX = Math.floor(Math.random() * width)
    const initY = Math.floor(Math.random() * height)
    let boxShadowString = `${initX}px ${initY}px ${theme.palette.persianGreen}`
    for (let i = 0; i < numberOfstars; i++) {
      const xCoordinates = Math.floor(Math.random() * width)
      const yCoordinates = Math.floor(
        Math.random() * (isSmall ? 1.5 * height * 2 : height * 2)
      )
      boxShadowString += `, ${xCoordinates}px ${yCoordinates}px ${theme.palette.persianGreen}`
    }
    return boxShadowString
  }

  const smallShadows = generateStars(800, 'isSmall')
  const mediumShadows = generateStars(200)
  const largeShadows = generateStars(100)

  return (
    <Container>
      <SmallStars
        shadows={smallShadows}
        animationSeconds={60}
        height={height}
      />
      <MediumStars
        shadows={mediumShadows}
        animationSeconds={90}
        height={height}
      />
      <LargeStars
        shadows={largeShadows}
        animationSeconds={120}
        height={height}
      />
    </Container>
  )
}
