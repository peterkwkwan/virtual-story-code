import React, { useState } from 'react'
import styled from 'styled-components'

import { ExplorerButton } from './shared/ExplorerButton'
import { Folder } from './Folder'
import { ViewletHeader } from '../../components/elements/ViewletHeader'
import { PageNames, PagePaths } from '../shared/routerConfig'
import { ViewletContainer } from '../shared/styledContainers'
import { FolderContent } from './shared/types'
import { FolderNames } from './shared/constants'

import SkeletonImage from '@/components/elements/SkeletonImage'

type IFolderStructure = Record<FolderNames, FolderContent>

const initFolders: IFolderStructure = {
  [FolderNames.NODE_MODULES]: {
    opened: false,
  },
  [FolderNames.CAREER]: {
    opened: true,
    files: [
      { title: PageNames.WTW, path: PagePaths.WTW },
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
  display: flex;
  width: 100%;
  border: none;
  color: inherit;
  line-height: 22px;
  white-space: pre;
  text-decoration: none;
  font-size: 11px;
  font-weight: 700;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: start;
  cursor: pointer;
  background-color: ${(props) => props.theme.palette.dark03};
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
        <SkeletonImage
          muted
          src="/assets/icons/arrow.svg"
          alt="arrow"
          height={10}
          width={10}
          style={{
            transform: show ? 'rotate(90deg)' : '',
            marginRight: '4px',
          }}
        />
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
