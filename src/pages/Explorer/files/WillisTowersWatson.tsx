import React from 'react'

import { ExplorerWrapper } from '../shared/ExplorerWrapper'
import { JobDescriptionTsx } from '../shared/JobDescriptionTsx'

import { useLastContributed } from '@/hooks/useLastContributed'

export const WillisTowersWatson = () => {
  const date = new Date()
  date.setDate(date.getDate() - 1)
  const diff = useLastContributed(date)

  const contributors = `${diff} | 6 authors (Richard Hanson and 3 others)`

  return (
    <ExplorerWrapper contributors={contributors}>
      <JobDescriptionTsx />
    </ExplorerWrapper>
  )
}
