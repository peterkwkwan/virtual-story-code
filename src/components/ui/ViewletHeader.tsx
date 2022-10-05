import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  height: 35px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`

const Title = styled.h6`
  margin: 0;
  color: ${(props) => props.theme.palette.text04};
  font-weight: 400;
  font-size: 11px;
  line-height: 35px;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: SF-Pro, sans-serif;
`
export const ViewletHeader = ({ headerName }: { headerName: string }) => {
  return (
    <StyledHeader>
      <Title>{headerName}</Title>
    </StyledHeader>
  )
}
