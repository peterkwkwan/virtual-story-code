import React from 'react'
import styled from 'styled-components'

import { ReplaceField } from './ReplaceField'
import { SearchField } from './SearchField'
import { SearchResult } from './SearchResult'

const Container = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const SearchSidebar = () => {
  return (
    <Container>
      <SearchField />
      <ReplaceField />
      <SearchResult />
    </Container>
  )
}
