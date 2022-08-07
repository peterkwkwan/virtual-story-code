import React from 'react'

import { ViewletContainer } from '../shared/styledContainers'
import { ViewletHeader } from '../../components/ui/ViewletHeader'
import { ExtensionsContainer } from './ExtensionsContainer'

export const ExtensionsViewlet = () => {
  return (
    <ViewletContainer>
      <ViewletHeader headerName="extensions: marketplace" />
      <ExtensionsContainer />
    </ViewletContainer>
  )
}
