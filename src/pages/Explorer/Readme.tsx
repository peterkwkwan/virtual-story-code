import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import {
  BaseText,
  DarkBlueText,
  LineBreak,
  StringText,
} from './shared/StyledText'

import { useLastContributed } from '@/hooks/useLastContributed'

const BlockBaseText = styled(BaseText)`
  display: block;
`

const ExternalLink = styled.a`
  text-decoration: underline;
  color: inherit;
`

const IntroLines = [
  'this is my virtual story',
  'journey started 2017 December',
  'Project tech stack:',
]

const RenderIntroLines = () =>
  IntroLines.map((line) => {
    return (
      <React.Fragment key={line}>
        <BlockBaseText>{line}</BlockBaseText>
        <LineBreak />
      </React.Fragment>
    )
  })

export const Readme = () => {
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  const currentYear = new Date().getFullYear()

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={15}>
      <DarkBlueText>## virtual story code</DarkBlueText>
      <LineBreak />
      {RenderIntroLines()}
      <BlockBaseText>
        <DarkBlueText>1. </DarkBlueText>[<StringText>Vite</StringText>](
        <ExternalLink target="_blank" rel="noopener" href="https://vitejs.dev/">
          https://vitejs.dev/
        </ExternalLink>
        ) - for Über fast local hosting & bundling speeds
      </BlockBaseText>
      <BlockBaseText>
        <DarkBlueText>2. </DarkBlueText>[
        <StringText>styled-components</StringText>](
        <ExternalLink
          target="_blank"
          rel="noopener"
          href="https://styled-components.com/"
        >
          https://styled-components.com/
        </ExternalLink>
        ) - CSS in JS, global theming, and conditional styling ;&#41;
      </BlockBaseText>
      <BlockBaseText>
        <DarkBlueText>3. </DarkBlueText>[<StringText>React Router</StringText>](
        <ExternalLink
          target="_blank"
          rel="noopener"
          href="https://reactrouter.com/"
        >
          https://reactrouter.com/
        </ExternalLink>
        ) - native-like site navigation
      </BlockBaseText>
      <LineBreak />
      <BlockBaseText>
        copyright &copy; {currentYear} [peterkwkwan](
        <ExternalLink
          target="_blank"
          rel="noopener"
          href="https://github.com/peterkwkwan"
        >
          https://github.com/peterkwkwan
        </ExternalLink>
        )
      </BlockBaseText>
    </ExplorerWrapper>
  )
}
