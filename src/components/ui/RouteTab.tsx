import React from 'react'
import styled from 'styled-components'

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
  path: string
}

export const RouteTab = ({path} : Props) => {
  return (
    <Container>{path}</Container>
  )
}
