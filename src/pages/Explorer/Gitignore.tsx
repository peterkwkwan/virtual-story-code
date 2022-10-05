import React from 'react'

import { useLastContributed } from '../../hooks/useLastContributed'
import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { BaseText, CommentGreen, LineBreak } from './shared/StyledText'

export const Gitignore = () => {
  const date = new Date('1991-12-07')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Bad food, Allergies and 1 other)`

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={10}>
      <BaseText>node_modules</BaseText>
      <br />
      <BaseText>dist</BaseText>
      <LineBreak />
      <CommentGreen># food</CommentGreen>
      <br />
      <BaseText>durian</BaseText>
      <br />
      <BaseText>broad_beans</BaseText>
      <br />
      <BaseText>stinky_tofu</BaseText>
      <br />
      <BaseText>snail_noodles</BaseText>
    </ExplorerWrapper>
  )
}
