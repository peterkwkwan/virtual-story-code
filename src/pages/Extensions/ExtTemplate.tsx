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
  margin: 0;
`

const Subtitle = styled.div`
  padding-top: 6px;
  white-space: nowrap;
  height: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;

  > div:not(:first-child):not(:empty) {
    border-left: 1px solid hsla(0, 0%, 50.2%, 0.7);
    margin-left: 14px;
    padding-left: 14px;
  }
`

const Description = styled.p`
  margin: 10px 0 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const ButtonContainer = styled.div`
  margin-top: 10px;
  > button {
    background-color: ${(props) => props.theme.palette.vsCodeDeepBlue};
    color: white;
    border-radius: 2px;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
  }
`

const DisableButton = styled.button``

const UninstallButton = styled.button`
  margin-left: 8px;
`

const Status = styled.div`
  margin-top: 8px;
  line-height: 22px;
  font-size: 90%;
`

interface Props {
  logoSrc: string
  title: string
  type: string
  proficiency: string
  description: string
}

export const ExtTemplate = ({
  logoSrc,
  title,
  type,
  proficiency,
  description,
}: Props) => {
  return (
    <Container>
      <Header>
        <ExtensionLogo src={logoSrc} />
        <Details>
          <Title>{title}</Title>
          <Subtitle>
            <div>{type}</div>
            <div>
              Level:&nbsp;
              {proficiency}
            </div>
          </Subtitle>
          <Description>{description}</Description>
          <ButtonContainer>
            <DisableButton>Disable</DisableButton>
            <UninstallButton>Uninstall</UninstallButton>
          </ButtonContainer>
          <Status>This skill is installed globally</Status>
        </Details>
      </Header>
    </Container>
  )
}
