import React from 'react'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { JobDescriptionTsx } from './shared/JobDescriptionTsx'
import { IJobDescription } from './shared/types'

import { useLastContributed } from '@/hooks/useLastContributed'
import { Companies, CompanyDescriptions } from '@/constants/companies'

export const BCWGroup = () => {
  const date = new Date('2022-10-31')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 5 authors (Daniel Costa and 4 others)`

  const jobDescription: IJobDescription = {
    role: 'Frontend Developer',
    isCurrentRole: true,
    companyName: Companies.BCW,
    date: 'July 2022 - October 2022',
    location: 'Hong Kong',
    companyDescription: CompanyDescriptions[Companies.BCW],
    functions: [
      'Frontend development of the Arkhia platform',
      'Built from scratch Arkhia.io documentation using Docusaurus; wrote developer and API guides',
    ],
    techStack: [
      'React v17',
      'Stripe.js',
      'React Router v6',
      'React Query v3',
      'TypeScript',
      'JavaScript',
      'Material UI v5',
      'Swagger',
      'Jira',
      'SourceTree',
      'Vite',
    ],
  }

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={38}>
      <JobDescriptionTsx jobDescription={jobDescription} />
    </ExplorerWrapper>
  )
}
