import React from 'react'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { useLastContributed } from '../../hooks/useLastContributed'
import { JobDescriptionTsx } from './shared/JobDescriptionTsx'

export const Serai = () => {
  const date = new Date('2022-07-25')
  const diff = useLastContributed(date)

  const contributors = `${diff} | 6 authors (Robert Dong and 5 others)`

  return (
    <ExplorerWrapper contributors={contributors}>
      <JobDescriptionTsx />
    </ExplorerWrapper>
  )
}
