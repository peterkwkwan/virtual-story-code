import React from 'react'
import styled from 'styled-components'

import { BaseContentContainer } from '../shared/styledContainers'

const Container = styled.div`
  display: flex;
  height: 100%;
  max-width: 290px;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LetterPress = styled.div`
  width: 290px;
  aspect-ratio: 1/1;
  background-image: url('/assets/images/extensions/extensions-home.svg');
  background-size: 100%;
  background-position-x: center;
  background-repeat: no-repeat;
`

const Summary = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: auto;
  column-gap: 8px;
  row-gap: 12px;
  margin-top: 20px;
  user-select: none;
  font-family: sans-serif;
  color: ${(props) => props.theme.palette.text03};
`
const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
`

const Col2 = styled.div`
  text-align: left;
`

const IconImage = styled.img`
  display: inline-block;
  border-radius: 3px;
  vertical-align: middle;
  padding: 4px;
  width: 12px;
  background-color: ${(props) => props.theme.palette.secondaryGrey};
`

export const ExtensionsHome = () => {
  return (
    <BaseContentContainer>
      <Container>
        <LetterPress />
        <Summary>
          <Col1>Select my skills on the left sidebar</Col1>
          <Col2>
            <IconImage src="/assets/icons/arrow-left.png" />
          </Col2>
          <Col1>Use the searchbox to filter skills</Col1>
          <Col2>
            <IconImage src="/assets/icons/search.png" />
          </Col2>
        </Summary>
      </Container>
    </BaseContentContainer>
  )
}
