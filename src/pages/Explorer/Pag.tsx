import React from 'react'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { useLastContributed } from '../../hooks/useLastContributed'
import { JobDescriptionTsx } from './shared/JobDescriptionTsx'

export const Pag = () => {
  const date = new Date('2021-10-01')
  const diff = useLastContributed(date)

  const contributors = `${diff} | 3 authors (Paul Chung and 3 others)`

  return (
    <ExplorerWrapper contributors={contributors}>
      <JobDescriptionTsx />
    </ExplorerWrapper>
  )
}
