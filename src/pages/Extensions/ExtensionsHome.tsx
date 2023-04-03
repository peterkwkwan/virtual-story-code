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
  margin-top: 20px;
  font-family: sans-serif;
  color: ${(props) => props.theme.palette.text03};
`
const Tips = styled.ul`
  list-style-type: none;
  padding: 0;
  user-select: none;
`

const Tip = styled.li`
  :not(:first-of-type) {
    margin-top: 8px;
  }
`

export const ExtensionsHome = () => {
  return (
    <BaseContentContainer>
      <Container>
        <LetterPress />
        <Summary>
          <Tips>
            <Tip>Select my skills on the left sidebar</Tip>
            <Tip>Use the searchbox to filter skills</Tip>
          </Tips>
        </Summary>
      </Container>
    </BaseContentContainer>
  )
}
