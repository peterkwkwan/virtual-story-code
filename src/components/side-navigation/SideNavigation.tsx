import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { SidebarBtns } from './SidebarBtns'

import { ExplorerViewlet } from '@/pages/explorer/ExplorerViewlet'
import { ExtensionsViewlet } from '@/pages/extensions/ExtensionsViewlet'
import { SearchViewlet } from '@/pages/search/SearchViewlet'
import { BlogViewlet } from '@/pages/blog/BlogViewlet'

const Container = styled.aside`
  display: flex;
  height: 100%;
  width: 348px;
`
const SidebarConfigs = {
  ['explorer']: <ExplorerViewlet />,
  ['search']: <SearchViewlet />,
  ['blog']: <BlogViewlet />,
  ['extensions']: <ExtensionsViewlet />,
}

const SideNavigation = () => {
  const { pathname } = useLocation()

  const renderSidebarContent = () => {
    const navigationKey = pathname.split('/')[1] as keyof typeof SidebarConfigs
    return SidebarConfigs[navigationKey]
  }

  return (
    <Container>
      <SidebarBtns />
      {renderSidebarContent()}
    </Container>
  )
}

export { SideNavigation }
