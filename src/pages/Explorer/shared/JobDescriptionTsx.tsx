import React, { useContext } from 'react'
import { Editor } from '@monaco-editor/react'

import { getTsxEditorDefaultValue } from './editorUtils'

import { PageNames } from '@/pages/shared/routerConfig'
import { Companies, CompanyDescriptions } from '@/constants/companies'
import { ExplorerContext } from '@/App'

export const JobDescriptionTsx = () => {
  const { currentFile } = useContext(ExplorerContext)
  const [file] = currentFile

  const JOB_DEFAULT_VALUE_MAPPING: { [key: string]: string } = {
    [PageNames.BCW_GROUP]: getTsxEditorDefaultValue({
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
    }),
    [PageNames.MANULIFE]: getTsxEditorDefaultValue({
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
    }),
    [PageNames.PAG]: getTsxEditorDefaultValue({
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
    }),
    [PageNames.SERAI]: getTsxEditorDefaultValue({
      role: 'Software Engineer',
      companyName: Companies.SERAI,
      date: 'October 2021 - July 2022',
      location: 'Hong Kong',
      companyDescription: CompanyDescriptions[Companies.SERAI],
      functions: [
        'Worked in the Supply Chain Solutions (SCS) frontend team, developing features, code review and pair-programming',
        'Navigation revamp from top-navbar to sidebar, which improved responsiveness across viewports and UX',
        'Revamp the supply chain map filtering, solving major end user pain point of not being able to filter out irrelevant information',
        'Built components in Storybook to align with UX Design System',
      ],
      techStack: [
        'React v16',
        'Next.js',
        'React Router v5',
        'React Query v3',
        'TypeScript',
        'ArgoCD',
        'Material UI v4',
        'Figma',
        'styled-components',
        'Git',
        'SwaggerHub',
        'Storybook',
        'Jira',
        'SourceTree',
      ],
    }),
    [PageNames.WTW]: getTsxEditorDefaultValue({
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
    }),
  }

  return (
    <Editor
      height="100%"
      path={file.title}
      defaultLanguage="javascript"
      defaultValue={JOB_DEFAULT_VALUE_MAPPING[file.title]}
      theme="vs-dark"
    />
  )
}
