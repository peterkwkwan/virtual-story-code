import React from 'react'
import styled from 'styled-components'

import { PageNames } from '@/pages/shared/routerConfig'

const Container = styled.div`
  height: 38px;
  width: 100%;
  color: white;
  font-family: 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 13px;
  line-height: 35px;
  text-overflow: ellipsis;
  text-decoration: none;
`

interface Props {
  name: PageNames
}

export const RouteTab = ({name} : Props) => {
  return (
    <Container>{name}</Container>
  )
}
