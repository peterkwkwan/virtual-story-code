import React from 'react'
import styled from 'styled-components'

import { BaseContentContainer } from '../../shared/styledContainers'

interface Props {
  children: React.ReactNode
  contributors?: React.ReactNode
  numberOfLines?: number
}

const StyledContainer = styled(BaseContentContainer)`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  width: 100%;
  white-space: nowrap;
  overflow: auto;
  @media only screen and (min-width: 1200px) {
    white-space: normal;
  }
`

const FileContents = styled.div`
  height: 100%;
  width: 100%;
`

const Contributors = styled.div`
  height: 20px;
  line-height: 15px;
  margin-left: 62px;
  font-size: 11px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.palette.contributors};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ExplorerWrapper = ({ children, contributors }: Props) => {
  const emptyContainer = !contributors

  return (
    <>
      {emptyContainer ? (
        <BaseContentContainer className="BaseContainer">
          <FileContents>{children}</FileContents>
        </BaseContentContainer>
      ) : (
        <StyledContainer className="BaseContainer">
          <Contributors>Peter Kwan, {contributors}</Contributors>
          {children}
        </StyledContainer>
      )}
    </>
  )
}
