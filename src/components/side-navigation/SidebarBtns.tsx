import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { UnstyledLink } from '../elements/UnstyledLink'

import { ExplorerContext } from '@/App'

enum SidebarOptions {
  EXPLORER = 'Explorer',
  SEARCH = 'Search',
  BLOG = 'Blog',
  EXTENSIONS = 'Extensions',
}

const Sidebar = styled.aside`
  background-color: ${(props) => props.theme.palette.dark02};
  height: 100%;
  width: 48px;
  z-index: 1;
`

const ButtonUnorderedList = styled.ul`
  margin: 0;
  padding: 0;
`

const SidebarButtons = styled.button<{ selected: boolean }>`
  border: none;
  background-color: inherit;
  cursor: pointer;
  width: ${(props) => (props.selected ? '46px' : '48px')};
  height: 48px;
  border-left: ${(props) => props.selected && '2px solid white'};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.selected ? 1 : 0.5)};
`

const buttons = [
  {
    title: SidebarOptions.EXPLORER,
    src: '/assets/icons/sidebar/explorer-btn.svg',
    path: 'explorer',
  },
  {
    title: SidebarOptions.SEARCH,
    src: '/assets/icons/sidebar/search-btn.svg',
    path: 'search',
  },
  {
    title: SidebarOptions.BLOG,
    src: '/assets/icons/sidebar/source-control-btn.svg',
    path: 'blog',
  },
  {
    title: SidebarOptions.EXTENSIONS,
    src: '/assets/icons/sidebar/extensions-btn.svg',
    path: 'extensions',
  },
]

export const SidebarBtns = () => {
  const { pathname } = useLocation()

  const { currentFile } = useContext(ExplorerContext)
  const [, setFile] = currentFile

  const handleChangePage = () => {
    setFile({ title: '', path: '' })
  }

  return (
    <Sidebar>
      <ButtonUnorderedList>
        {buttons.map((btn) => (
          <UnstyledLink key={btn.title} path={btn.path}>
            <SidebarButtons
              key={btn.title}
              aria-label={`Go to ${btn.title}`}
              selected={pathname.includes(btn.path)}
              onClick={handleChangePage}
            >
              <img src={btn.src} alt="sidebar-btn" />
            </SidebarButtons>
          </UnstyledLink>
        ))}
      </ButtonUnorderedList>
    </Sidebar>
  )
}
