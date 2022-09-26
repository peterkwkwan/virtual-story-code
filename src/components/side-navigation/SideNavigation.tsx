import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { ExplorerViewlet } from '../../pages/explorer/ExplorerViewlet'
import { ExtensionsViewlet } from '../../pages/extensions/ExtensionsViewlet'
import { SearchViewlet } from '../../pages/search/SearchViewlet'
import { SidebarBtns } from './SidebarBtns'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 348px;
`
const SidebarConfigs = {
  ['explorer']: <ExplorerViewlet />,
  ['search']: <SearchViewlet />,
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
