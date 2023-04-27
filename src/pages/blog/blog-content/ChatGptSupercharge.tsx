import React from 'react'

import { Container, InnerContainer, StyledCaption } from './styles'
import { BlogLinks, Blogs } from '../shared/constants'
import { ContinueReading } from './ContinueReading'

import SkeletonImage from '@/components/elements/SkeletonImage'

export const ChatGptSupercharge = () => {
  return (
    <Container>
      <InnerContainer>
        <h1>{Blogs.CHATGPT_SUPERCHARGE}</h1>
        <h2>1. Writing Documentation</h2>
        <p>
          Documentation, an oft-neglected but critical component in development,
          is one of the low hanging fruits for ChatGPT. Nobody wants to write
          it, but everybody wants it.
        </p>
        <figure>
          <SkeletonImage
            src="https://miro.medium.com/v2/resize:fit:1280/0*LDUWvWInhXM4ZaSw.gif"
            alt="Sweaty ChatGPT"
            height="auto"
            width="100%"
            style={{ aspectRatio: '320/199' }}
          />
          <StyledCaption>
            Rare footage of ChatGPT writing 10 pages of documentation in under 5
            seconds
          </StyledCaption>
        </figure>
        <p>
          I’ve come across scenarios where new developers have joined teams only
          to be overwhelmed by the industry jargon, internal tools, and coding
          practices. This can easily be solved with good documentation.
        </p>
        <p>
          Enter ChatGPT. It’s no secret that ChatGPT can pump out Ivy League
          quality essays. Developers will be able to generate high-quality
          documentation for their code in a matter of minutes. This will
          undoubtedly save time and ensure that the code is well-documented and
          easy to understand for other developers.
        </p>
        <h2>2. Stakeholder Management</h2>
        <p>
          Writing documentation is great and all, but what about emails or text
          messages?
        </p>

        <p>
          As an AI that was trained to be impartial and provide information that
          is factual and unbiased, and also not capable of expressing personal
          opinions (yet), ChatGPT is a great tool to help come up with basic
          template responses.
        </p>
        <p>
          This is incredibly handy when emotions and stress run high at work,
          and you want to refrain from letting your emotions get the better of
          you.
        </p>
        <p>
          Here are some scenarios where you could turn to ChatGPT to draft up an
          impartial response:
        </p>
        <ContinueReading href={BlogLinks[Blogs.CHATGPT_SUPERCHARGE]} />
      </InnerContainer>
    </Container>
  )
}
