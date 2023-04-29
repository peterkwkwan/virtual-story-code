import React from 'react'
import styled from 'styled-components'

import { TimelineEvent } from './TimelineBackbone'

const Container = styled.div`
  position: relative;
  width: 300px;
  user-select: none;
`

const InnerContainer = styled.div`
  position: relative;
  top: -30px;
  left: 10px;
  width: 100%;
  height: 100px;
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.dark02};
  padding-top: 30px;
`

const Title = styled.h3`
  position: relative;
  z-index: 1;
  width: fit-content;
  margin: 0;
  padding: 8px 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Date = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 8px;
  right: 0;
  font-size: 2rem;
  font-weight: 900;
`

const Role = styled.span``

const CompanyLogo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 4px solid ${(props) => props.theme.palette.text04};
`

export const EventItem = ({ title, date, role, iconSrc }: TimelineEvent) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Date>{date}</Date>

      <InnerContainer>
        <CompanyLogo src={iconSrc} alt={title} />
        <Role>- {role} -</Role>
      </InnerContainer>
    </Container>
  )
}
