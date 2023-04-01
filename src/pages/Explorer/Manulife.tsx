import React from 'react'

import { ExplorerWrapper } from './shared/ExplorerWrapper'
import { useLastContributed } from '../../hooks/useLastContributed'
import { JobDescriptionTsx } from './shared/JobDescriptionTsx'
import { IJobDescription } from './shared/types'

import { Companies, CompanyDescriptions } from '@/constants/companies'

export const Manulife = () => {
  const date = new Date('2020-05-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 3 authors (Albert Ahg and 2 others)`

  const jobDescription: IJobDescription = {
    role: 'Software Developer',
    companyName: Companies.MANULIFE,
    date: 'August 2019 - May 2020',
    location: 'Hong Kong',
    companyDescription: CompanyDescriptions[Companies.MANULIFE],
    functions: [
      'Spearheaded the Hong Kong CWS (Customer Web Site) revamp',
      'Worked closely with the UI/UX team to gather requirements and implement features',
      'Consumed RESTful api for displaying insurance products in frontend page',
    ],
    techStack: [
      'Angular 8',
      'Sass',
      'Material Angular',
      'Bootstrap 4',
      'Jenkins',
    ],
  }
  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={34}>
      <JobDescriptionTsx jobDescription={jobDescription} />
    </ExplorerWrapper>
  )
}
