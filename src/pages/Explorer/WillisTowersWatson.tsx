import React from 'react'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { useLastContributed } from '../../hooks/useLastContributed'
import { JobDescriptionTsx } from './shared/JobDescriptionTsx'

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
