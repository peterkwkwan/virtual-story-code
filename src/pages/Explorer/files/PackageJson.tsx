import React, { useContext } from 'react'
import { Editor } from '@monaco-editor/react'

import { ExplorerWrapper } from '../shared/ExplorerWrapper'

import { ExplorerContext } from '@/App'
import { useLastContributed } from '@/hooks/useLastContributed'

export const PackageJson = () => {
  const date = new Date('2022-06-01')
  const diff = useLastContributed(date)
  const { currentFile } = useContext(ExplorerContext)
  const [file] = currentFile
  const contributors = `${diff} | 2 authors (Mrs. Kwan and 1 other)`

  const defaultValue = `{
  "name": "virtual-story-code",
  "version": "0.0.7",
  "scripts": {
    "develop": "applications",
    "build": "career",
    "practice": "leetcode",
    "eat": "poutine",
    "play": "super smash",
    "watch": "star wars",
    "workout": "bench press"
  },
  "dependencies": {
    "children": true,
    "numberOfDogs": 0
  },
  "devDependencies": {
    "wife": true,
    "@pc-master-race": "GTX 1070 Ti",
    "@nintendo": "switch",
    "bbt": true,
    "career-satisfaction": true,
    "happy-wife": "happy-life",
    "poutine": "Math.max(Infinity, over * 9000)"
  }
}`

  return (
    <ExplorerWrapper contributors={contributors}>
      <Editor
        height="100%"
        path={file.title}
        defaultLanguage="json"
        defaultValue={defaultValue}
        theme="vs-dark"
        options={{ wordWrap: true }}
      />
    </ExplorerWrapper>
  )
}
