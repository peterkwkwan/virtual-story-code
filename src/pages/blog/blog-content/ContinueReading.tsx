import React from 'react'
import styled from 'styled-components'

import { ExternalLink } from '@/components/elements/ExternalLink'

const Prompt = styled.div`
  position: relative;
  text-align: center;
  font-weight: 700;
  padding: 12px 0 100px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContinueReading = ({ href }: { href: string }) => {
  return (
    <Prompt>
      <Container>
        <ExternalLink
          text="Continue reading on Medium"
          href={href}
          style={{ color: 'white' }}
        />
        <img
          src="/assets/icons/link-external.svg"
          alt="External link"
          style={{ marginLeft: '8px' }}
        />
      </Container>
    </Prompt>
  )
}
