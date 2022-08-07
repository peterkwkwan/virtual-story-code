import React from 'react'
import styled from 'styled-components'
import TypewriterComponent from 'typewriter-effect'

import { LightBlueText, LineBreak, PurpleText, StringText } from './StyledText'

const StyledImport = styled.div`
  margin: 0;
  font-family: Menlo, Monaco, "Courier New", monospace;
`

/* eslint-disable react/no-unescaped-entities */
export const ReactImports = () => {
  const typewriterString = '<span style="color: #c586c0;">import</span> <span style="color: #9cdcfe;">Job</span> <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">\'career\'</span>'
  return (
    <>
      <StyledImport>
        <PurpleText>import</PurpleText> <LightBlueText>React</LightBlueText>{' '}
        <PurpleText>from</PurpleText> <StringText>'react'</StringText>
        <div style={{ height: '18px' }}>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.typeString(typewriterString).pauseFor(2500).start()
            }}
          />
        </div>
      </StyledImport>
      <LineBreak />
    </>
  )
}
/* eslint-enable react/no-unescaped-entities */
