import React, { useState } from 'react'
import styled from 'styled-components'

import { ExtensionsButton } from './ExtensionsButton'
import { ExtensionsList } from './ExtensionsRouterConfig'
import { ExtensionConfig } from './shared/types'

import { useBoundStore } from '@/hooks/useBoundStore'

interface FolderButton {
  opened: boolean
}

interface StyledFolder {
  opened: boolean
  isHovering: boolean
}

const Container = styled.div`
  height: calc(100% - 34px);
  overflow: auto;

  margin-top: 8px;
  background-color: ${(props) => props.theme.palette.dark03};
`

const FolderButton = styled.button<FolderButton>`
  width: 100%;
  background-color: ${(props) => props.theme.palette.dark03};
  border: none;
  line-height: 22px;
  padding: 0;
  white-space: pre;
  text-decoration: none;
  font-size: 11px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: start;
  color: inherit;
  cursor: pointer;
  &:before {
    content: url('/assets/icons/arrow.svg');
    display: inline-block;
    transform: ${(props) => props.opened && 'rotate(90deg)'};
    margin: 0 5px;
  }

  &:hover {
    background-color: ${(props) => props.theme.palette.grey};
  }
`

const CollapsibleFolder = styled.div<StyledFolder>`
  /* height: ${(props) =>
    props.opened ? 'calc(100% - 22px - 22px)' : '0px'}; */
  height: ${(props) => (props.opened ? 'auto' : '0px')};
  max-height: calc(100% - 22px - 22px);
  overflow: auto;
  background-color: ${(props) => props.theme.palette.dark03};
  &::-webkit-scrollbar {
    width: 10px;
    background-color: ${(props) => props.theme.palette.dark01};
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.palette.dark02};
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(100, 100, 100, 0.7);
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: rgba(191, 191, 191, 0.4);
  }
`

export const SkillSidebarList = () => {
  const [installedFolderOpened, setInstalledFolderOpened] = useState(true)
  const [availableFolderOpened, setAvailableFolderOpened] = useState(true)
  const [hovering, setHovering] = useState(false)
  const extensionsStatus = useBoundStore((state) => state.extensionStatus)

  const handleInstalledFolderClick = () => {
    setInstalledFolderOpened((prevState) => !prevState)
  }
  const handleAvailableFolderClick = () => {
    setAvailableFolderOpened((prevState) => !prevState)
  }

  const handleMouseLeave = () => {
    setHovering(false)
  }
  const handleMouseEnter = () => {
    setHovering(true)
  }

  const installedExtensions: ExtensionConfig[] = []
  const availableExtensions: ExtensionConfig[] = []

  ExtensionsList.forEach((extension) => {
    if (extensionsStatus[extension.title]?.uninstalled) {
      availableExtensions.push(extension)
    } else {
      installedExtensions.push(extension)
    }
  })

  return (
    <Container>
      <FolderButton
        opened={availableFolderOpened}
        aria-label="Toggle skill folder"
        onClick={handleAvailableFolderClick}
      >
        AVAILABLE
      </FolderButton>
      <CollapsibleFolder
        opened={availableFolderOpened}
        isHovering={hovering}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {availableExtensions.map((extension) => {
          return <ExtensionsButton key={extension.title} {...extension} />
        })}
      </CollapsibleFolder>
      <FolderButton
        opened={installedFolderOpened}
        aria-label="Toggle skill folder"
        onClick={handleInstalledFolderClick}
      >
        INSTALLED
      </FolderButton>
      <CollapsibleFolder
        opened={installedFolderOpened}
        isHovering={hovering}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {installedExtensions.map((extension) => {
          return <ExtensionsButton key={extension.title} {...extension} />
        })}
      </CollapsibleFolder>
    </Container>
  )
}
