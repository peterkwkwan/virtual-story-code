import React from 'react'
import styled from 'styled-components'

import { BaseContentContainer } from '../shared/styledContainers'
import { HyperLink } from './shared/constants'
import { AvatarContainer } from './AvatarContainer'

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`

const Profiles = [
  { title: 'GitHub', hyperlink: HyperLink.GITHUB },
  { title: 'LinkedIn', hyperlink: HyperLink.LINKEDIN },
  { title: 'Medium', hyperlink: HyperLink.MEDIUM },
  { title: 'Resume', hyperlink: HyperLink.RESUME },
]

export const SearchHome = () => {
  return (
    <BaseContentContainer>
      <Container>
        {Profiles.map((profile) => (
          <AvatarContainer key={profile.title} {...profile} />
        ))}
      </Container>
    </BaseContentContainer>
  )
}
