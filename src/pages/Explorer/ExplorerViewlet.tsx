import React, { useState } from 'react'
import styled from 'styled-components'

import { ExplorerButton } from './shared/ExplorerButton'
import { Folder } from './Folder'
import { ViewletHeader } from '../../components/elements/ViewletHeader'
import { PageNames, PagePaths } from '../shared/routerConfig'
import { ViewletContainer } from '../shared/styledContainers'
import { FolderContent } from './shared/types'
import { FolderNames } from './shared/constants'

type IFolderStructure = Record<FolderNames, FolderContent>

const initFolders: IFolderStructure = {
  [FolderNames.NODE_MODULES]: {
    opened: false,
  },
  [FolderNames.CAREER]: {
    opened: true,
    files: [
      { title: PageNames.BCW_GROUP, path: PagePaths.BCW_GROUP },
      { title: PageNames.SERAI, path: PagePaths.SERAI },
      { title: PageNames.PAG, path: PagePaths.PAG },
      { title: PageNames.MANULIFE, path: PagePaths.MANULIFE },
      { title: PageNames.ACURIS, path: PagePaths.ACURIS },
      { title: PageNames.COLEMAN, path: PagePaths.COLEMAN },
      { title: PageNames.CATHAY, path: PagePaths.CATHAY },
    ],
  },
  [FolderNames.EDUCATION]: {
    opened: true,
    files: [
      { title: PageNames.MCGILL, path: PagePaths.MCGILL },
      { title: PageNames.HKU, path: PagePaths.HKU },
      { title: PageNames.BBYNORTH, path: PagePaths.BBYNORTH },
    ],
  },
}

const StyledHeaderBtn = styled.button<{ show: boolean }>`
  width: 100%;
  border: none;
  color: inherit;
  line-height: 22px;
  white-space: pre;
  text-decoration: none;
  font-size: 13px;
  text-align: start;
  font-family: Segoe WPC, Segoe UI, sans-serif;
  cursor: pointer;
  background-color: ${(props) => props.theme.palette.dark03};
  &:before {
    content: url('/assets/icons/arrow.svg');
    display: inline-block;
    transform: ${(props) => props.show && 'rotate(90deg)'};
    margin-right: 4px;
  }
`

const rootFiles = [
  {
    title: PageNames.README,
    path: PagePaths.README,
    isRoot: true,
  },
  {
    title: PageNames.PACKAGE_JSON,
    path: PagePaths.PACKAGE_JSON,
    isRoot: true,
  },
  {
    title: PageNames.GIT_IGNORE,
    path: PagePaths.GIT_IGNORE,
    isRoot: true,
  },
]

export const ExplorerViewlet = () => {
  const [explorerFolders, setExplorerFolders] = useState(initFolders)

  const handleFolderClick = (value: FolderNames) => {
    const folderToChange = initFolders[value]

    folderToChange.opened = !folderToChange.opened
    const newState = {
      [value]: {
        ...folderToChange,
      },
      ...explorerFolders,
    }

    setExplorerFolders(newState)
  }

  const [show, setShow] = useState(true)

  const handleToggle = () => {
    setShow((prevState) => !prevState)
  }

  const folders = () => {
    const result = []
    const orderedFolders = Object.keys(explorerFolders)
      .sort()
      .reduce((newObj, key) => {
        newObj[key as FolderNames] = explorerFolders[key as FolderNames]
        return newObj
      }, initFolders)

    for (const key in orderedFolders) {
      result.push(
        <Folder
          key={key as FolderNames}
          folder={explorerFolders[key as FolderNames]}
          name={key as FolderNames}
          onFolderClick={handleFolderClick}
        />
      )
    }
    return result
  }

  return (
    <ViewletContainer>
      <ViewletHeader headerName="explorer" />
      <StyledHeaderBtn show={show} onClick={handleToggle}>
        VIRTUAL-STORY-CODE
      </StyledHeaderBtn>

      {show && (
        <>
          {folders()}
          {rootFiles.map((rootFile) => {
            return <ExplorerButton key={rootFile.title} {...rootFile} />
          })}
        </>
      )}
    </ViewletContainer>
  )
}
