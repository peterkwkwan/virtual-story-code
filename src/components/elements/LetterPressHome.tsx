import React from 'react'
import styled from 'styled-components'

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
  background-image: url('/assets/images/extensions-home.svg');
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

interface Props {
  tips: {
    text: string
    src: string
  }[]
}

export const LetterPressHome = ({ tips }: Props) => {
  return (
    <Container>
      <LetterPress />
      <Summary>
        {tips.map((tip) => (
          <React.Fragment key={tip.text}>
            <Col1>{tip.text}</Col1>
            <Col2>
              <IconImage src={tip.src} alt={tip.src} />
            </Col2>
          </React.Fragment>
        ))}
      </Summary>
    </Container>
  )
}
