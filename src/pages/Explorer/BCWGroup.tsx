import React from 'react'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { JobDescriptionTsx } from './shared/JobDescriptionTsx'
import { IJobDescription } from './shared/types'

import { useLastContributed } from '@/hooks/useLastContributed'

export const BCWGroup = () => {
  const date = new Date('2022-07-27')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 5 authors (Daniel Costa and 4 others)`

  const jobDescription: IJobDescription = {
    role: 'Frontend Developer',
    isCurrentRole: true,
    companyName: 'BCW Group',
    date: 'July 2022 - Present',
    location: 'Hong Kong',
    companyDescription:
      'BCW Group is a consulting & technology firm specialising in 3 inter-connected disciplines: digital payments, digital assets & distributed ledger technology (DLT).',
    functions: [
      'Frontend development of the Arkhia platform',
      'Built from scratch Arkhia.io documentation using Docusaurus; wrote developer and API guides',
    ],
    techStack: [
      'React v17', 'Stripe.js', 'React Router v6', 'React Query v3', 'TypeScript', 'JavaScript', 'Material UI v5', 'Swagger', 'Jira', 'SourceTree', 'Vite'
    ],
  }

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={38}>
      <JobDescriptionTsx jobDescription={jobDescription} />
    </ExplorerWrapper>
  )
}
