import React from 'react'

import { ViewletContainer } from '../shared/styledContainers'

import { ViewletHeader } from '@/components/elements/ViewletHeader'

export const BlogViewlet = () => {
  return (
    <ViewletContainer>
      <ViewletHeader headerName="blog" />
      {/* <ExtensionsSidebar /> */}
    </ViewletContainer>
  )
}
