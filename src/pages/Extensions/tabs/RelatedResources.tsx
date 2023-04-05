import React from 'react'
import styled from 'styled-components'

import { ResourceLinks } from '@/constants/skills'
import { ExternalLink } from '@/components/elements/ExternalLink'

const Container = styled.div`
  padding-left: 20px;
`

const Title = styled.h6`
  margin: 0 0 16px;
  font-size: 0.875rem;
  font-weight: 200;
`

const LinkContainer = styled.div`
  :not(:first-of-type) {
    margin-top: 2px;
  }
`

interface Props {
  resources: ResourceLinks
}

const renderResources = (resources: ResourceLinks) => {
  const linksEl = []

  for (const key in resources) {
    linksEl.push(
      <LinkContainer key={key}>
        <ExternalLink
          href={resources[key]}
          text={key}
          style={{ fontSize: '0.875rem' }}
        />
      </LinkContainer>
    )
  }

  return <div>{linksEl}</div>
}

export const RelatedResources = ({ resources }: Props) => {
  return (
    <Container>
      <Title>Related Resources</Title>
      {renderResources(resources)}
    </Container>
  )
}
