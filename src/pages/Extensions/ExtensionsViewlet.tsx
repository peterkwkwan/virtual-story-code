import React from 'react'

import { ViewletContainer } from '../shared/styledContainers'
import { ViewletHeader } from '../../components/elements/ViewletHeader'
import { ExtensionsSidebar } from './ExtensionsSidebar'

export const ExtensionsViewlet = () => {
  return (
    <ViewletContainer>
      <ViewletHeader headerName="extensions: marketplace" />
      <ExtensionsSidebar />
    </ViewletContainer>
  )
}
