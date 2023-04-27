import React from 'react'
import styled from 'styled-components'

import { ExternalLink } from '@/components/elements/ExternalLink'

const Container = styled.div`
  padding-left: 30px;
`

const Text = styled.p`
  margin-top: 1.75rem;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -0.009em;
  line-height: 40px;
  font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: rgba(117, 117, 117, 1);
`

interface Props {
  text: string
  creditProps?: {
    text: string
    externalLink?: string
  }
}
export const BlockQuote = ({ text, creditProps }: Props) => {
  return (
    <Container>
      <Text>“{text}”</Text>
      {creditProps?.externalLink ? (
        <p>
          —{' '}
          <ExternalLink
            text={creditProps.text}
            href={creditProps.externalLink}
          />
        </p>
      ) : creditProps ? (
        <p>— {creditProps?.text}</p>
      ) : (
        ''
      )}
    </Container>
  )
}
