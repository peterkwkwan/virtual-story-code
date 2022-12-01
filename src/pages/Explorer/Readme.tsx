import React from 'react'
import styled from 'styled-components'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { BaseText, DarkBlueText, LineBreak, StringText } from './shared/StyledText'

import { useLastContributed } from '@/hooks/useLastContributed'

export const Readme = () => {
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={12}>
      <DarkBlueText>## virtual story code</DarkBlueText>
      <LineBreak/>
      this is my virtual story
      <LineBreak/>
      journey started 2017 December
      <LineBreak/>
      Project tech stack:
      <LineBreak/>
      <BaseText>
        <DarkBlueText>1. </DarkBlueText>[<StringText>Vite</StringText>](https://vitejs.dev/) - for Über fast local hosting & bundling speeds
      </BaseText>
      <div>
        <DarkBlueText>2. </DarkBlueText>[<StringText>styled-components</StringText>](https://styled-components.com/) - CSS in JS, global theming, and conditional styling ;&#41;
      </div>
      <div>
        <DarkBlueText>3. </DarkBlueText>[<StringText>React Router</StringText>](https://reactrouter.com/) - native-like site navigation
      </div>
    </ExplorerWrapper>
  )
}
