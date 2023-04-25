import React, { useContext } from 'react'
import { Editor } from '@monaco-editor/react'

import { getScssEditorDefaultValue } from './editorUtils'

import { PageNames } from '@/pages/shared/routerConfig'
import { Companies } from '@/constants/companies'
import { ExplorerContext } from '@/App'

export const JobDescriptionScss = () => {
  const { currentFile } = useContext(ExplorerContext)
  const [file] = currentFile

  const JOB_DEFAULT_VALUE_MAPPING: { [key: string]: string } = {
    [PageNames.ACURIS]: getScssEditorDefaultValue({
      role: 'Relationship Manager',
      companyName: Companies.ACURIS,
      date: 'March 2016 - May 2019',
      location: 'Hong Kong',
      companyDescription:
        'Acuris is a leading provider of global corporate financial news, intelligence and analysis to advisory firms, investments banks, law firms, hedge funds, private equity firms and corporations.',
      functions: [
        'Official training mentor for 3 new joiners in the Relationship Management team.',
        'Managed 50+ client relationships across investment banking, law firm & private equity sectors to ensure the client’s needs are met.',
        'Identify client motivations, enabling cross-selling plus up-selling opportunities.',
      ],
    }),
    [PageNames.COLEMAN]: getScssEditorDefaultValue({
      role: 'Operations Analyst',
      companyName: Companies.COLEMAN_RESEARCH,
      date: 'March 2015 - March 2016',
      location: 'Hong Kong',
      companyDescription:
        'Coleman Research is a leading expert-network research firm.',
      functions: [
        'Effectively manage relationships between experts and clients.',
        "Primary contact for C-level industry advisers and world's leading PE firms, hedge funds, and consultancies.",
        'Resolve member service issues both on expert and client levels.',
      ],
    }),
  }
  return (
    <Editor
      height="100%"
      path={file.title}
      defaultLanguage="scss"
      defaultValue={JOB_DEFAULT_VALUE_MAPPING[file.title]}
      theme="vs-dark"
    />
  )
}
