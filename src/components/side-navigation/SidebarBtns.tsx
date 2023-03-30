import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { StyledLink } from '../elements/StyledLink'

enum SidebarOptions {
  EXPLORER = 'Explorer',
  SEARCH = 'Search',
  GIT = 'Git',
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
    title: SidebarOptions.GIT,
    src: '/assets/icons/sidebar/git-btn.svg',
    path: 'git',
  },
  {
    title: SidebarOptions.EXTENSIONS,
    src: '/assets/icons/sidebar/extensions-btn.svg',
    path: 'extensions',
  },
]

export const SidebarBtns = () => {
  const { pathname } = useLocation()

  return (
    <Sidebar>
      <ButtonUnorderedList>
        {buttons.map((btn) => (
          <StyledLink key={btn.title} path={btn.path}>
            <SidebarButtons
              key={btn.title}
              selected={pathname.includes(btn.path)}
            >
              <img src={btn.src} />
            </SidebarButtons>
          </StyledLink>
        ))}
      </ButtonUnorderedList>
    </Sidebar>
  )
}
