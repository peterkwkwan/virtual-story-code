import React from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useContext } from 'react'

import { TimelineEvent } from './TimelineBackbone'

import { ActionButton } from '@/components/elements/ActionButton'
import { Tooltip } from '@/components/elements/Tooltip'

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

const Title = styled.div`
  position: relative;
  top: 24px;
  z-index: 1;
  margin: 0;
  width: fit-content;
`

const CompanyName = styled.div`
  margin: 12px;
`

const Role = styled.span`
  font-size: 1rem;
  font-weight: 300;
  margin-left: 28px;
`

const Character = styled.img`
  height: 120px;
  position: absolute;
  bottom: 42px;
  right: -12px;
  z-index: 2;
`

const Date = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 8px;
  right: 0;
  font-size: 2rem;
  font-weight: 900;
`

const Content = styled.div`
  padding: 12px;
  height: calc(100% - 24px);
`

const KeyTech = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
`

const Tech = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 4px;
  cursor: pointer;
`

export const EventItem = ({
  title,
  date,
  role,
  iconSrc,
  techStack,
  color,
}: TimelineEvent) => {
  const themeContext = useContext(ThemeContext)

  return (
    <Container>
      <Character src={iconSrc} alt={title} />
      <Title>
        <CompanyName>
          <ActionButton
            text={title}
            href=""
            fontSize="1.5rem"
            height="1.2rem"
            spanMargin="0px"
            background={color}
            contrast={
              color === themeContext.palette.marioYellow ||
              color === themeContext.palette.marioGreen
            }
          />
        </CompanyName>

        <Role>{role}</Role>
      </Title>
      <Date>{date}</Date>
      <InnerContainer>
        <Content>
          <KeyTech>
            {techStack.map((tech) => {
              return (
                <Tooltip key={tech} content="text" direction="top">
                  <Tech src={tech} />
                </Tooltip>
              )
            })}
          </KeyTech>
        </Content>
      </InnerContainer>
    </Container>
  )
}
