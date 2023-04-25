import React from 'react'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { useLastContributed } from '../../hooks/useLastContributed'
import { JobDescriptionTsx } from './shared/JobDescriptionTsx'

export const Manulife = () => {
  const date = new Date('2020-05-01')
  const diff = useLastContributed(date)

  const contributors = `${diff} | 3 authors (Albert Ahg and 2 others)`

  return (
    <ExplorerWrapper contributors={contributors}>
      <JobDescriptionTsx />
    </ExplorerWrapper>
  )
}
