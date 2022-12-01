import React from 'react'
import styled from 'styled-components'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { DarkBlueText, LineBreak, StringText } from './shared/StyledText'

import { useLastContributed } from '@/hooks/useLastContributed'

export const Readme = () => {
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={17}>
      <DarkBlueText>## virtual story code</DarkBlueText>
      <LineBreak/>
      this is my virtual story
      <LineBreak/>
      journey started 2017 December
      <LineBreak/>
      Project tech stack:
      <LineBreak/>
      <DarkBlueText>1. </DarkBlueText>[<StringText>Vite</StringText>](https://vitejs.dev/) - for Über fast local hosting & bundling speeds
    </ExplorerWrapper>
  )
}
