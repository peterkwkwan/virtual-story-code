import React from 'react'
import styled from 'styled-components'

import { BaseContentContainer } from '../shared/styledContainers'
import { HyperLink } from './shared/constants'
import { AvatarContainer } from './AvatarContainer'
import { ContactForm } from './ContactForm'

const StyledBaseContainer = styled(BaseContentContainer)`
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1920px) {
    max-width: 60%;
  }
`

const ProfilesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
  margin: 12px 0 28px;
`

const Profiles = [
  { title: 'GitHub', hyperlink: HyperLink.GITHUB },
  { title: 'LinkedIn', hyperlink: HyperLink.LINKEDIN },
  { title: 'Medium', hyperlink: HyperLink.MEDIUM },
  { title: 'Resume', hyperlink: HyperLink.RESUME },
]

export const SearchHome = () => {
  return (
    <StyledBaseContainer>
      <Container>
        <ProfilesContainer>
          {Profiles.map((profile) => (
            <AvatarContainer key={profile.title} {...profile} />
          ))}
        </ProfilesContainer>
        <ContactForm />
      </Container>
    </StyledBaseContainer>
  )
}
