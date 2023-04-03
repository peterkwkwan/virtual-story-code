import React from 'react'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { useLastContributed } from '../../hooks/useLastContributed'
import { JobDescriptionTsx } from './shared/JobDescriptionTsx'
import { IJobDescription } from './shared/types'

import { Companies, CompanyDescriptions } from '@/constants/companies'

export const WillisTowersWatson = () => {
  const date = new Date()
  date.setDate(date.getDate() - 1)
  const diff = useLastContributed(date)
  const contributors = `${diff} | 6 authors (Richard Hason and 3 others)`

  const jobDescription: IJobDescription = {
    role: 'Software Engineer',
    companyName: Companies.WTW,
    date: 'November 2022 - Present',
    location: 'Hong Kong',
    companyDescription: CompanyDescriptions[Companies.WTW],
    functions: [
      'Migrated Material UI v4 to v5 in Career Navigator legacy app, refactoring over 3000 lines of code with respect to breaking changes. Resulted in improved developer experience and resolved 20+ legacy bugs',
    ],
    techStack: [
      'React',
      'Gatsby',
      'TypeScript',
      'JavaScript',
      'C#',
      'AngularJS',
      'styled-components',
      'Material UI',
      'Git',
    ],
  }

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={32}>
      <JobDescriptionTsx jobDescription={jobDescription} />
    </ExplorerWrapper>
  )
}
