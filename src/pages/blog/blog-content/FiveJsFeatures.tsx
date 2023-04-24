import React from 'react'

import { Container, InnerContainer, StyledCaption } from './styles'
import { BlogLinks, Blogs } from '../shared/constants'
import { ContinueReading } from './ContinueReading'

import { ExternalLink } from '@/components/elements/ExternalLink'
import SkeletonImage from '@/components/elements/SkeletonImage'

export const FiveJsFeatures = () => {
  return (
    <Container>
      <InnerContainer>
        <h1>{Blogs.FIVE_JS_FEATURES}</h1>
        <p>
          The&nbsp;
          <ExternalLink
            text="2022 The State of JavaScript"
            href="https://2022.stateofjs.com/en-us/"
          />
          &nbsp;survey came out a few weeks ago. The survey has proven to be a
          fascinating litmus test of where JavaScript is headed, as well as a
          breeding ground for developers to&nbsp;
          <ExternalLink
            text="vent their frustration towards
        Angular"
            href="https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/"
          />
          .
        </p>
        <figure>
          <SkeletonImage
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*fW6piHpnKBSH7k8oj7vj-Q.png"
            alt="JS Framework Popularity Chart"
            height="auto"
            width="100%"
            style={{ aspectRatio: '680/453' }}
          />
          <StyledCaption>
            Google — please shutdown Angular like you do with all your other
            projects
          </StyledCaption>
        </figure>
        <p>
          <ExternalLink
            text="One particularly interesting section"
            href="https://2022.stateofjs.com/en-US/features/language/"
          />
          &nbsp;highlights new(ish) JavaScript features which many developers
          haven’t used or haven’t heard of. If you are reading this, chances
          are, you probably don’t know some of these features either (don’t
          worry, me too).
        </p>
        <figure>
          <SkeletonImage
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8Zrmg9UcZAXZACLjo6jEkw.png"
            alt="Temporal"
            height="auto"
            width="100%"
            style={{ aspectRatio: '680/227' }}
          />
          <StyledCaption>Nani??</StyledCaption>
        </figure>
        <p>
          So, instead of being intimidated by new tools and terminology (I
          certainly am!), I’ll aim to give you a TLDR (too long; didn’t read)
          version of 5 lesser-known features in JavaScript.
        </p>
        <h2>5. Promise.allSettled() (37.7% never heard of it)</h2>
        <p>
          <ExternalLink
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled"
            text="Promise.allSettled()"
          />
          &nbsp;is a static method that accepts an iterable (e.g. array) of
          promises. Example below:
        </p>
        <ContinueReading href={BlogLinks[Blogs.FIVE_JS_FEATURES]} />
      </InnerContainer>
    </Container>
  )
}
