import React, { useContext } from 'react'
import { Editor } from '@monaco-editor/react'

import { ExplorerWrapper } from '../shared/ExplorerWrapper'

import { ExplorerContext } from '@/App'
import { useLastContributed } from '@/hooks/useLastContributed'

export const Gitignore = () => {
  const date = new Date('1991-12-07')
  const diff = useLastContributed(date)
  const { currentFile } = useContext(ExplorerContext)
  const [file] = currentFile

  const contributors = `${diff} | 2 authors (Bad food, Allergies and 1 other)`

  const defaultValue = `node_modules

dist

#food
durian
broad_beans 
stinky_tofu
snail_noodles`

  return (
    <ExplorerWrapper contributors={contributors}>
      <Editor
        height="100%"
        path={file.title}
        defaultLanguage="ini"
        defaultValue={defaultValue}
        theme="vs-dark"
        options={{ wordWrap: true }}
      />
    </ExplorerWrapper>
  )
}
