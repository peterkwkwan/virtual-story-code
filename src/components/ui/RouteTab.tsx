import React from 'react'
import styled from 'styled-components'

import { PageNames } from '@/pages/shared/routerConfig'

const Container = styled.div`
  height: 38px;
  width: 100%;
  display: flex;
  line-height: 35px;
  color: white;
`

const Label = styled.p`
  font-family: "Segoe UI", Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 13px;
  margin: 0;
  text-overflow: ellipsis;
`

const Cross = styled.div`
  margin-left: 4px;
  padding: 2px;
  ::before {
    content: "\\00d7";
  }
  :hover{
    background: ${props => props.theme.palette.dark02};
    cursor: pointer;
  }
`

interface Props {
  name: PageNames;
}

export const RouteTab = ({ name }: Props) => {
  return (
    <Container>
      <Label>{name}</Label>
      <Cross />
    </Container>
  )
}
