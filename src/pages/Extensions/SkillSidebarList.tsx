import React, { RefObject, useState } from 'react'
import styled from 'styled-components'

import { ExtensionsButton } from './ExtensionsButton'
import { ExtensionsList } from '.'

import {
  Tracker,
  useIntersectionObserver,
} from '@/hooks/useIntersectionObserver'

interface FolderButton {
  opened: boolean
  shadow: boolean
}

interface StyledFolder {
  opened: boolean
  isHovering: boolean
}

const Container = styled.div`
  padding: 12px 0 0;
  height: calc(100% - 26px - 14px);
`

const FolderButton = styled.button<FolderButton>`
  width: 100%;
  background-color: inherit;
  border: none;
  line-height: 22px;
  padding: 0;
  white-space: pre;
  text-decoration: none;
  font-size: 11px;
  font-weight: 600;
  font-family: sans-serif;
  text-align: start;
  box-shadow: ${(props) =>
    props.shadow ? '-10px 5px 2px ' + props.theme.palette.dark01 : ''};
  color: inherit;
  cursor: pointer;

  transition: box-shadow 0.5s;

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
  visibility: ${(props) => (props.opened ? 'visible' : 'hidden')};
  height: calc(100% - 22px);
  overflow: auto;
  transition: background-color 0.5s;
  background-color: ${(props) => props.theme.palette.dark04};
  background-clip: text;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: ${(props) => props.theme.palette.dark01};
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: inherit;
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
  const [visibility, targetRef] = useIntersectionObserver(
    Tracker.FIRST_EXT_BUTTON,
    0.1
  )
  const showBoxShadow = !visibility[Tracker.FIRST_EXT_BUTTON]
  const divRef = targetRef as RefObject<HTMLDivElement>

  const [opened, setOpened] = useState(true)
  const [hovering, setHovering] = useState(false)
  const [selectedIndex, setSelected] = useState<undefined | number>(undefined)

  const handleFolderClick = () => {
    setOpened((prevState) => !prevState)
  }

  const handleMouseLeave = () => {
    setHovering(false)
  }
  const handleMouseEnter = () => {
    setHovering(true)
  }

  const handleSetSelected = (index: number) => {
    setSelected(index)
  }

  return (
    <Container>
      <FolderButton
        opened={opened}
        shadow={showBoxShadow}
        onClick={handleFolderClick}
      >
        INSTALLED
      </FolderButton>
      <CollapsibleFolder
        opened={opened}
        isHovering={hovering}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {ExtensionsList.map((extension, index) => {
          if (index === 0) {
            return (
              <div ref={divRef}>
                <ExtensionsButton
                  key={extension.title}
                  {...extension}
                  handleSetSelected={handleSetSelected}
                  selected={selectedIndex === index}
                  index={index}
                />
              </div>
            )
          }
          return (
            <ExtensionsButton
              key={extension.title}
              {...extension}
              handleSetSelected={handleSetSelected}
              selected={selectedIndex === index}
              index={index}
            />
          )
        })}
      </CollapsibleFolder>
    </Container>
  )
}
