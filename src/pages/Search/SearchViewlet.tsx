import { ViewletContainer } from '../shared/styledContainers'
import { SearchContainer } from './SearchContainer'

import { ViewletHeader } from '@/components/elements/ViewletHeader'

export const SearchViewlet = () => {
  return (
    <ViewletContainer>
      <ViewletHeader headerName="search" />
      <SearchContainer />
    </ViewletContainer>
  )
}
