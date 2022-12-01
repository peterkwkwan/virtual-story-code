import React from 'react'
import styled from 'styled-components'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { BaseText, DarkBlueText, LineBreak, StringText } from './shared/StyledText'

import { useLastContributed } from '@/hooks/useLastContributed'

const BlockBaseText = styled(BaseText)`
  display: block;
`

export const Readme = () => {
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={13}>
      <DarkBlueText>## virtual story code</DarkBlueText>
      <LineBreak/>
      <BlockBaseText>
      this is my virtual story
      </BlockBaseText>
      <LineBreak/>
      <BlockBaseText>
      journey started 2017 December
      </BlockBaseText>
      <LineBreak/>
      <BlockBaseText>
      Project tech stack:
      </BlockBaseText>
      <LineBreak/>
      <BlockBaseText>
        <DarkBlueText>1. </DarkBlueText>[<StringText>Vite</StringText>](https://vitejs.dev/) - for Über fast local hosting & bundling speeds
      </BlockBaseText>
      <BlockBaseText>
        <DarkBlueText>2. </DarkBlueText>[<StringText>styled-components</StringText>](https://styled-components.com/) - CSS in JS, global theming, and conditional styling ;&#41;
      </BlockBaseText>
      <BlockBaseText>
        <DarkBlueText>3. </DarkBlueText>[<StringText>React Router</StringText>](https://reactrouter.com/) - native-like site navigation
      </BlockBaseText>
    </ExplorerWrapper>
  )
}
