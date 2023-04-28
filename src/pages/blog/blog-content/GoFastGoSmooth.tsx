import React from 'react'

import { Container, InnerContainer, StyledCaption } from './styles'
import { BlogLinks, Blogs } from '../shared/constants'
import { ContinueReading } from './ContinueReading'
import { BlockQuote } from '../shared/BlockQuote'

import SkeletonImage from '@/components/elements/SkeletonImage'
import { ExternalLink } from '@/components/elements/ExternalLink'

export const GoFastGoSmooth = () => {
  return (
    <Container>
      <InnerContainer>
        <h1>{Blogs.GO_FAST_GO_SMOOTH}</h1>
        <p>
          Performance is crucial when it comes to providing a good user
          experience. In an age of smartphones and speedy internet connections,
          users have little to no tolerance for a bad UX.
        </p>
        <p>
          First impressions mean everything, so if your site takes longer than
          necessary to load, it could mean one less sale or customer for your
          business.
        </p>
        <p>
          So how do we obtain that coveted, green, 100%&nbsp;
          <ExternalLink
            text="Lighthouse"
            href="https://developer.chrome.com/docs/lighthouse/overview/"
          />
          &nbsp; performance score?
        </p>
        <figure>
          <SkeletonImage
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QyTxJRVz3SRsNX1TpDjXBw.jpeg"
            alt="Feels good"
            height="auto"
            width="100%"
            style={{ aspectRatio: '340/207' }}
          />
          <StyledCaption>Feels good</StyledCaption>
        </figure>
        <p>
          Lately, I’ve been working on my personal website (still in beta!).
          I’ve never paid attention to performance since I started the project
          last year, so naturally, I was curious when I stumbled across the
          Lighthouse developer tool.
        </p>
        <p>I decided to run a quick test. Below were the results.</p>
        <figure>
          <SkeletonImage
            src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*Ppjtwg94ETo6nIHCR6wiRw.png"
            alt="oops"
            height="auto"
            width="100%"
            style={{ aspectRatio: '484/653' }}
          />
          <StyledCaption>Definitely needs work!</StyledCaption>
        </figure>
        <p>
          Needless to say, I was not happy with these scores! I started digging
          around to see what was going on under the hood, specifically for
          performance.
        </p>
        <figure>
          <SkeletonImage
            src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*w0nldRebDqBzdcgOSIYYag.png"
            alt="CLS and LCP"
            height="auto"
            width="100%"
            style={{ aspectRatio: '12/7' }}
          />
          <StyledCaption>
            Cumulative Layout Shift (CLS) and Largest Contentful Paint (LCP)
            were killing me
          </StyledCaption>
        </figure>
        <p>
          According to the Lighthouse performance{' '}
          <ExternalLink
            text="weightings"
            href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/#lighthouse-10"
          />
          ,&nbsp;
          <ExternalLink
            text="Cumulative Layout Shift"
            href="https://web.dev/cls/"
          />
          &nbsp;(CLS) and&nbsp;
          <ExternalLink
            text="Largest Contentful Paint"
            href="https://web.dev/lcp/"
          />
          (LCP) were dragging my performance rating down. What is going on?
        </p>
        <p>Let’s try to improve my site by tackling these two metrics.</p>
        <h2>Cumulative Layout Shift (CLS)</h2>
        <p>
          CLS is a measure of the largest burst of layout shift scores for
          every&nbsp;
          <ExternalLink
            text="unexpected"
            href="https://web.dev/cls/#expected-vs-unexpected-layout-shifts"
          />{' '}
          layout shift that occurs during the entire lifespan of a page. These
          shifts are usually due to font changes, images without dimensions or
          ads, embeds, and iframes without dimensions.
        </p>
        <p>
          To figure out which elements where affect the CLS score, I hopped over
          to the Performance tab. It turns out, it was my title header that was
          causing the shift.
        </p>
        <ContinueReading href={BlogLinks[Blogs.FIVE_TIPS]} />
      </InnerContainer>
    </Container>
  )
}
