import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: ${(props) => props.theme.palette.text01};
  font-family: sans-serif;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 80%;
`

const Header = styled.div`
  display: flex;
  padding: 20px 20px 14px;
  overflow: hidden;
`

const ExtensionLogo = styled.img`
  height: 128px;
  width: 128px;
  object-fit: contain;
`

const Details = styled.div`
  padding-left: 20px;
  overflow: hidden;
  user-select: text;
  -webkit-user-select: text;
`

const Title = styled.h3`
  flex: 0;
  font-size: 26px;
  line-height: 30px;
  font-weight: 600;
  white-space: nowrap;
`

const Subtitle = styled.div`
  padding-top: 6px;
  white-space: nowrap;
  height: 20px;
  line-height: 20px;
`

const Description = styled.p`
  margin-top: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

interface Props {
  children: React.ReactNode
  logoSrc: string
  title: string
  description: string
}

export const ExtensionWrapper = ({
  children,
  logoSrc,
  title,
  description,
}: Props) => {
  return (
    <Container>
      <Header>
        <ExtensionLogo src={logoSrc} />
        <Details>
          <Title>{title}</Title>
          <Subtitle></Subtitle>
          <Description>{description}</Description>
        </Details>
      </Header>
      {children}
    </Container>
  )
}
