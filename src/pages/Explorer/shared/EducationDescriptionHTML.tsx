import React, { useContext } from 'react'
import { Editor } from '@monaco-editor/react'

import { getHtmlEditorDefaultValue } from './editorUtils'

import { ExplorerContext } from '@/App'
import { PageNames } from '@/pages/shared/routerConfig'

export const EducationDescriptionHTML = () => {
  const { currentFile } = useContext(ExplorerContext)
  const [file] = currentFile

  const EDUCATION_DEFAULT_VALUE_MAPPING: { [key: string]: string } = {
    [PageNames.MCGILL]: getHtmlEditorDefaultValue({
      schoolName: 'McGill University',
      year: '2014',
      location: { city: 'Montreal', country: 'Canada' },
      degreeType: 'Bachelors',
      degreeName: 'Bachelor of Arts',
      subjects: ['Major in Economics', 'Minor in International Development'],
    }),
    [PageNames.HKU]: getHtmlEditorDefaultValue({
      schoolName: 'HKU Space',
      year: '2015',
      location: { city: 'Hong Kong', country: 'Hong Kong SAR' },
      degreeType: 'PPL',
      degreeName: 'Private Pilot License',
      subjects: ['Certificate in Australian Private Pilot License (PPL)'],
    }),
    [PageNames.BBYNORTH]: getHtmlEditorDefaultValue({
      schoolName: 'Burnaby North',
      year: '2009',
      location: { city: 'Vancouver', country: 'Canada' },
      degreeType: 'secondary education',
      degreeName: 'High School Diploma',
    }),
  }

  return (
    <Editor
      height="100%"
      path={file.title}
      defaultLanguage="html"
      defaultValue={EDUCATION_DEFAULT_VALUE_MAPPING[file.title]}
      theme="vs-dark"
      options={{ wordWrap: true }}
    />
  )
}
