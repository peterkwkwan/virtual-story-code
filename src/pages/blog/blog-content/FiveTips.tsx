import React from 'react'

import { Container, InnerContainer, StyledCaption } from './styles'
import { BlogLinks, Blogs } from '../shared/constants'
import { ContinueReading } from './ContinueReading'

export const FiveTips = () => {
  return (
    <Container>
      <InnerContainer>
        <h1>{Blogs.FIVE_TIPS}</h1>
        <p>
          My self-taught journey started nearly 5 years ago, in late 2017.
          Looking back, there are definitely situations I would have handled
          differently, and some things I wish someone had told me earlier.
        </p>
        <p>These are my top 5 tips for any aspiring developer!</p>
        <h2>1. Be in it for the right reason</h2>
        <p>
          During the first year of learning how to program, I encountered 3
          phases:
        </p>
        <ol>
          <li>
            The initial <i>eureka </i>
            moment — discovering the joy of coding after making my first “hello
            world” app. Everything just ‘clicks’
          </li>
          <li>
            The <i>honeymoon</i> phase
          </li>
          <li>
            The <i>plateau</i>
          </li>
        </ol>
        <p>
          Most self-taught developers I met have experienced this general
          trajectory of growth, starting with an initial excitement period
          (eureka), followed by an adrenaline-filled stretch of high growth
          (honeymoon), then finally a prolonged stage of feeling stuck
          (plateau).
        </p>
        <figure>
          <img
            src="https://miro.medium.com/v2/resize:fit:1080/format:webp/1*lXv5aMOwsu0G4XE5pQDPkA.jpeg"
            alt="Man pushing boulder"
          />
          <StyledCaption>It&apos;s gonne be a grind</StyledCaption>
        </figure>
        <p>
          The plateau is where most self-learners will drop out. This can be due
          to a variety of reasons (but not limited to):
        </p>

        <ul>
          <li>Coding is no longer enjoyable</li>
          <li>Feeling overwhelmed & burnt-out</li>
          <li>
            Discouraged by the lack interviews & job application responses
          </li>
        </ul>
        <ContinueReading href={BlogLinks[Blogs.FIVE_TIPS]} />
      </InnerContainer>
    </Container>
  )
}
