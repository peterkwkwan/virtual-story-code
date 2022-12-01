import React from 'react'
import styled from 'styled-components'

import { StyledLink } from './StyledLink'

import { PageNames, PagePaths } from '@/pages/shared/routerConfig'

const Container = styled.div`
  height: 38px;
  width: 100%;
  background-color: ${props => props.theme.palette.dark03};
`

const Tab = styled.div`
  height: 100%;
  width: fit-content;
  padding: 0 4px 0 10px;
  display: flex;
  align-items: center;
  line-height: 35px;
  color: white;
  background-color: ${props => props.theme.palette.dark01};
`

const Label = styled.p`
  font-family: "Segoe UI", Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 13px;
  margin: 0;
  text-overflow: ellipsis;
`

const Cross = styled.button`
  margin-left: 4px;
  height: 18px;
  width: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 200;
  background: none;
  color: inherit;
  outline: inherit;
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
      <Tab>
        <Label>{name}</Label>
        <StyledLink path={PagePaths.HOME}>
          <Cross>&times;</Cross>
        </StyledLink>
      </Tab>
    </Container>
  )
}
