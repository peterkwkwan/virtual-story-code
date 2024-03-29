import React from 'react'

import { ExplorerWrapper } from '../shared/ExplorerWrapper'
import { JobDescriptionTsx } from '../shared/JobDescriptionTsx'

import { useLastContributed } from '@/hooks/useLastContributed'

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
