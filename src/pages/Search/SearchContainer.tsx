import React from 'react'
import styled from 'styled-components'

import { ReplaceField } from './ReplaceField'
import { SearchField } from './SearchField'
import { SearchResult } from './SearchResult'

const Container = styled.div`
  font-family: SF-Pro, sans-serif;
`

export const SearchContainer = () => {
  return (
    <Container>
      <SearchField />
      <ReplaceField />
      <SearchResult />
    </Container>
  )
}
