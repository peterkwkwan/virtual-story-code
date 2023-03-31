import React from 'react'
import styled from 'styled-components'

import { Extension } from './shared/types'

import { StyledLink } from '@/components/elements/StyledLink'

const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 0 0 0 16px;
  background-color: ${(props) => props.theme.palette.dark03};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.palette.grey};
  }
  border: none;
`

const Content = styled.div`
  width: calc(100% - 16px - 42px - 14px);
  font-size: 13px;
  font-family: sans-serif;
  font-weight: 600;
  line-height: 18px;
  padding: 4px 0;
  text-align: start;
`

const Title = styled.span`
  color: ${(props) => props.theme.palette.text01};
`

const Description = styled.p`
  color: ${(props) => props.theme.palette.text02};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  font-weight: 400;
`

const Author = styled.span`
  font-size: 90%;
  color: ${(props) => props.theme.palette.text04};
`

export const ExtensionsButton = ({
  icon,
  title,
  description,
  type,
  path,
}: Extension) => {
  return (
    <StyledLink path={path}>
      <Button>
        {icon}
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Author>{type}</Author>
        </Content>
      </Button>
    </StyledLink>
  )
}
