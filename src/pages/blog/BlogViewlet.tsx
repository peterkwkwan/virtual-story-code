import React from 'react'

import { ViewletContainer } from '../shared/styledContainers'
import { BlogSidebar } from './BlogSidebar'

import { ViewletHeader } from '@/components/elements/ViewletHeader'

export const BlogViewlet = () => {
  return (
    <ViewletContainer>
      <ViewletHeader headerName="blog" />
      <BlogSidebar />
    </ViewletContainer>
  )
}
