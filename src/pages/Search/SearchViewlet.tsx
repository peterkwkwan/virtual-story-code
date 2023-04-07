import { ViewletContainer } from '../shared/styledContainers'
import { SearchSidebar } from './SearchSidebar'

import { ViewletHeader } from '@/components/elements/ViewletHeader'

export const SearchViewlet = () => {
  return (
    <ViewletContainer>
      <ViewletHeader headerName="search" />
      <SearchSidebar />
    </ViewletContainer>
  )
}
