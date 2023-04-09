import React from 'react'

import { Container, InnerContainer } from './styles'
import { BlogLinks, Blogs } from '../shared/constants'
import { ContinueReading } from './ContinueReading'

import { ExternalLink } from '@/components/elements/ExternalLink'

export const Impostor = () => {
  return (
    <Container>
      <InnerContainer>
        <h1>{Blogs.IMPOSTOR}</h1>
        <p>
          The tech industry is relentless when it comes to innovation. This
          rapid change can be daunting for developers who lack the time and
          energy to keep up.
        </p>
        <p>
          During code reviews, interviews, and technical meetings, shortcomings
          are easily exposed, which can then lead to the feeling of&nbsp;
          <ExternalLink
            text="Impostor
          Syndrome"
            href="https://en.wikipedia.org/wiki/Impostor_syndrome"
          />
          .
        </p>
        <p>
          This feeling is not limited to these those new to the field. Seasoned
          coders with 10+ years of experience feel it too. We as humans cannot
          help but compare ourselves with others, and chances are, you will run
          into others that are better than you.
        </p>
        <p>
          Below are points I remind myself time and time again to beat this
          mental pressure, as impostor syndrome is very much a struggle within
          your own mind.
        </p>
        <h2>
          1. If you are the smartest person in the room, you are in the wrong
          room
        </h2>
        <p>
          We cannot escape the fact that someone, somewhere out there, has more
          knowledge, experience and talent in whatever field that you are in,
          and that is completely OK!
        </p>
        <p>
          We all have met that one guy on our team that codes after work, on
          weekends, does the daily&nbsp;
          <ExternalLink text="Leetcode" href="https://leetcode.com/" />
          &nbsp;challenge, and still somehow has energy to teach coding as a
          side-gig.
        </p>
        <p>
          I spoke to this guy on my team recently, and to my surprise, he too
          has the same anxiety of not being ‘good enough’.
        </p>
        <p>
          I thought to myself, “Wow…if he feels this too, then when am I ever
          going to be good enough?!”.
        </p>

        <p>Thus, I came to this realisation: it is OK to not be good enough!</p>
        <ContinueReading href={BlogLinks[Blogs.IMPOSTOR]} />
      </InnerContainer>
    </Container>
  )
}
