import React from 'react'
import { useSprings, animated, to as interpolate } from 'react-spring'
import styled from 'styled-components'

import { Content } from './Content'
import { HyperLink } from './shared/constants'

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://i.pinimg.com/originals/30/09/e7/3009e722ec057ffab1e41d2f993385d1.png);
  background-size: cover;
`

const Profiles = [
  { title: 'GitHub', hyperlink: HyperLink.GITHUB },
  { title: 'LinkedIn', hyperlink: HyperLink.LINKEDIN },
  { title: 'Medium', hyperlink: HyperLink.MEDIUM },
  { title: 'Resume', hyperlink: HyperLink.RESUME },
]

const to = (i: number) => ({
  x: 0,
  y: 10,
  scale: 1,
  delay: i * 500,
})
const from = (_i: number) => ({ x: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`

export const ContentContainer = () => {
  const [springs] = useSprings(Profiles.length, (i) => ({
    ...to(i),
    from: from(i),
  }))

  return (
    <Container>
      {/* {profiles.map((profile) => ( */}
      {springs.map(({ x, y, scale }, i) => (
        <animated.div key={Profiles[i].title} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            style={{
              transform: interpolate([scale], trans),
            }}
          >
            <Content key={Profiles[i].title} {...Profiles[i]} />
          </animated.div>
        </animated.div>
      ))}
    </Container>
  )
}
