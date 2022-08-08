import React, { useState } from 'react'
import styled from 'styled-components'

import { ExplorerButton } from './shared/ExplorerButton'
import { Folder } from './Folder'
import { ViewletHeader } from '../../components/ui/ViewletHeader'
import { PagePaths } from '../shared/routerConfig'
import { ViewletContainer } from '../shared/styledContainers'
import { FolderContent } from './shared/types'
import { FolderNames } from './shared/constants'

type IFolderStructure = Record<FolderNames, FolderContent>;

const initFolders: IFolderStructure = {
  [FolderNames.NODE_MODULES]: {
    opened: false,
  },
  [FolderNames.CAREER]: {
    opened: true,
    files: [
      { title: 'BCWGroup.tsx', path: PagePaths.BCW_GROUP },
      { title: 'Serai.tsx', path: PagePaths.SERAI },
      { title: 'PAG.tsx', path: PagePaths.PAG },
      { title: 'Manulife.tsx', path: PagePaths.MANULIFE },
      { title: 'Acuris.scss', path: PagePaths.ACURIS },
      { title: 'Coleman.scss', path: PagePaths.COLEMAN },
      { title: 'CathayDragon.test', path: PagePaths.CATHAY },
    ],
  },
  [FolderNames.EDUCATION]: {
    opened: true,
    files: [
      { title: 'McGill.html', path: PagePaths.MCGILL },
      { title: 'HKU.html', path: PagePaths.HKU },
      { title: 'BurnabyNorth.html', path: PagePaths.BBYNORTH },
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
    content: url("../../assets/icons/arrow.svg");
    display: inline-block;
    transform: ${(props) => props.show && 'rotate(90deg)'};
    margin-right: 4px;
  }
`

const rootFiles = [
  {
    title: 'README.md',
    path: PagePaths.README,
    isRoot: true,
  },
  {
    title: 'package.json',
    path: PagePaths.PACKAGE_JSON,
    isRoot: true,
  },
  {
    title: '.gitignore',
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
