import React from 'react'

import { ExplorerWrapper } from '../shared/ExplorerWrapper'
import { JobDescriptionTsx } from '../shared/JobDescriptionTsx'

import { useLastContributed } from '@/hooks/useLastContributed'

export const BCWGroup = () => {
  const date = new Date('2022-10-31')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 5 authors (Daniel Costa and 4 others)`

  return (
    <ExplorerWrapper contributors={contributors}>
      <JobDescriptionTsx />
    </ExplorerWrapper>
  )
}
