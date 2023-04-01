import React from 'react'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { useLastContributed } from '../../hooks/useLastContributed'
import { JobDescriptionTsx } from './shared/JobDescriptionTsx'
import { IJobDescription } from './shared/types'

import { Companies, CompanyDescriptions } from '@/constants/companies'

export const Pag = () => {
  const date = new Date('2021-10-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 3 authors (Paul Chung and 3 others)`

  const jobDescription: IJobDescription = {
    role: 'Software Developer',
    companyName: Companies.PAG,
    date: 'May 2020 - October 2021',
    location: 'Hong Kong',
    companyDescription: CompanyDescriptions[Companies.PAG],
    functions: [
      'Identified inefficient workflows in HR / PE teams; built React apps to avoid human errors and streamline processes',
      'Refactored a single-file C# 4000+ line vendor app into a scalable format. Resolved 10+ legacy bugs and increased performance by 95%, resulting in efficient extendibility',
    ],
    techStack: [
      'SPFx',
      'React v16',
      'TypeScript',
      'PostgreSQL',
      'pgAdmin4',
      'Bitbucket',
      'Git',
      'Material UI v4',
      'Jira',
      'SourceTree',
    ],
  }

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={37}>
      <JobDescriptionTsx jobDescription={jobDescription} />
    </ExplorerWrapper>
  )
}
