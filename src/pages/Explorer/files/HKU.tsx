import React from 'react'

import { EducationDescriptionHTML } from '../shared/EducationDescriptionHTML'
import { ExplorerWrapper } from '../shared/ExplorerWrapper'

import { useLastContributed } from '@/hooks/useLastContributed'

export const HKU = () => {
  const date = new Date('2015-06-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 3 authors (Mom & Dad and 1 other)`

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={23}>
      <EducationDescriptionHTML />
    </ExplorerWrapper>
  )
}
