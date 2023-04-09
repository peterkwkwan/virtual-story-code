import React from 'react'
import styled from 'styled-components'

import { BaseContentContainer } from '../../shared/styledContainers'

interface Props {
  children: React.ReactNode
  contributors?: React.ReactNode
  numberOfLines?: number
}

const StyledContainer = styled(BaseContentContainer)`
  font-size: 12px;
  width: 100%;
`

const FileContents = styled.div`
  height: 100%;
  width: 100%;
`

const LineNumbers = styled.aside`
  margin-top: 20px;
  width: 66px;
  height: calc(100% - 20px);
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      margin: 0;
      direction: rtl;
      text-align: center;
      width: 66px;
      font-family: Menlo, Monaco, 'Courier New', monospace;
      line-height: 18px;
      letter-spacing: 0px;
      font-size: 12px;
      color: ${(props) => props.theme.palette.lineNumberText};
    }
  }
`

const Contributors = styled.div`
  height: 20px;
  line-height: 15px;
  font-size: 11px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.palette.contributors};
`

export const ExplorerWrapper = ({
  children,
  contributors,
  numberOfLines = 0,
}: Props) => {
  const lineNumbers = [...Array(numberOfLines).keys()]
  lineNumbers.shift()

  const emptyContainer = !contributors || !numberOfLines

  return (
    <>
      {emptyContainer ? (
        <BaseContentContainer className="BaseContainer">
          <FileContents>{children}</FileContents>
        </BaseContentContainer>
      ) : (
        <StyledContainer className="BaseContainer">
          <LineNumbers>
            <ul>
              {lineNumbers.map((number) => (
                <li key={number}>{number}</li>
              ))}
            </ul>
          </LineNumbers>
          <FileContents>
            <Contributors>Peter Kwan, {contributors}</Contributors>
            {children}
          </FileContents>
        </StyledContainer>
      )}
    </>
  )
}
