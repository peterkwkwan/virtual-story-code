import React from 'react'
import styled from 'styled-components'

import { TimelineEvent } from './TimelineBackbone'

const Container = styled.div`
  position: relative;
  width: 360px;
  user-select: none;
  @media only screen and (min-width: 1440px) {
    width: 460px;
  }
`

const InnerContainer = styled.div`
  position: relative;
  top: -30px;
  left: 10px;
  width: 100%;
  height: 150px;
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.dark02};
  padding-top: 30px;
`

const Content = styled.div`
  padding: 12px;
  height: calc(100% - 24px);
`

const Title = styled.div`
  position: relative;
  z-index: 1;
  margin: 0;
  width: fit-content;
`

const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 4px solid ${(props) => props.theme.palette.text01};
  background-color: ${(props) => props.theme.palette.text01};
`

const TitleHeader = styled.div`
  position: absolute;
  top: -28px;
  left: 58px;
  width: max-content;
`

const CompanyName = styled.h3`
  padding: 8px 12px;
  margin-bottom: 4px;
  font-size: 1.5rem;
`

const Role = styled.span`
  font-size: 1rem;
  font-weight: 300;
  margin-left: 12px;
`

const Date = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 8px;
  right: 0;
  font-size: 2rem;
  font-weight: 900;
`

const KeyTech = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const Tech = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 4px;
`

export const EventItem = ({
  title,
  date,
  role,
  iconSrc,
  techStack,
}: TimelineEvent) => {
  return (
    <Container>
      <Title>
        <CompanyLogo src={iconSrc} alt={title} />
        <TitleHeader>
          <CompanyName>{title}</CompanyName>
          <Role>{role}</Role>
        </TitleHeader>
      </Title>
      <Date>{date}</Date>
      <InnerContainer>
        <Content>
          <KeyTech>
            {techStack.map((tech) => {
              return <Tech key={tech} src={tech} />
            })}
          </KeyTech>
        </Content>
      </InnerContainer>
    </Container>
  )
}
