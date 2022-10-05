import React from 'react'

import { ExplorerWrapper } from './shared/ExplorerWrapper'

import { useLastContributed } from '@/hooks/useLastContributed'

export const Readme = () => {
  const date = new Date('2019-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={17}>
        This is Readme
    </ExplorerWrapper>
  )
}
