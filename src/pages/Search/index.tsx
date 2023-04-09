import React from 'react'
import styled from 'styled-components'

import { BaseContentContainer } from '../shared/styledContainers'
import { HyperLink } from './shared/constants'
import { AvatarContainer } from './AvatarContainer'
import { ContactForm } from './ContactForm'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const ProfilesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50%;
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
        <ProfilesContainer>
          {Profiles.map((profile) => (
            <AvatarContainer key={profile.title} {...profile} />
          ))}
        </ProfilesContainer>
        <ContactForm />
      </Container>
    </BaseContentContainer>
  )
}
