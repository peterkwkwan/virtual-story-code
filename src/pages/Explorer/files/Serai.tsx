import React from 'react'

import { ExplorerWrapper } from '../shared/ExplorerWrapper'
import { JobDescriptionTsx } from '../shared/JobDescriptionTsx'

import { useLastContributed } from '@/hooks/useLastContributed'

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
