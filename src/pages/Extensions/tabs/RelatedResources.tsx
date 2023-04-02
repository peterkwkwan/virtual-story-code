import React from 'react'
import styled from 'styled-components'

import { ResourceLinks } from '@/constants/skills'

const Container = styled.div`
  padding-left: 20px;
`

const Title = styled.h6`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 200;
`

interface Props {
  resources: ResourceLinks
}

const renderResources = (resources: ResourceLinks) => {
  const linksEl = []

  for (const key in resources) {
    linksEl.push(
      <React.Fragment key={key}>
        <>
          {key} - {resources[key]}
        </>
      </React.Fragment>
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
