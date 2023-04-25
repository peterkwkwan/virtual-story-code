import React, { useContext } from 'react'
import { Editor } from '@monaco-editor/react'

import { useLastContributed } from '../../hooks/useLastContributed'
import { ExplorerWrapper } from './shared/ExplorerWrapper'

import { ExplorerContext } from '@/App'

export const CathayDragon = () => {
  const date = new Date('2012-08-01')
  const diff = useLastContributed(date)
  const { currentFile } = useContext(ExplorerContext)
  const [file] = currentFile

  const contributors = `${diff} | 4 authors (Anthony Yung and 3 others)`

  const defaultValue = `import chai from 'chai'
import Intern from 'internship'
  
describe('Cathay Dragon intern', function () {
  const intern = new Intern("Swire Summer Internship");
  intern.date = "Summer 2012";
  it("should draft iPhone storyboard", function () {
    assert.taskCompleted(intern.draftStoryboard(), true);
  });
  it("should create new library catalog system.", function () {
    assert.taskCompleted(intern.createCatalog(), true);
  });
  it("should publish private Wikipedia page.", function () {
    assert.taskCompleted(intern.publishInternalWiki(), true);
  });
});
  `

  return (
    <ExplorerWrapper contributors={contributors}>
      <Editor
        height="100%"
        path={file.title}
        defaultLanguage="javascript"
        defaultValue={defaultValue}
        theme="vs-dark"
      />
    </ExplorerWrapper>
  )
}
