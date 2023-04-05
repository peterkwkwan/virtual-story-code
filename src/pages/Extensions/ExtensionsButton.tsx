import React from 'react'
import styled from 'styled-components'

import { Extension } from './shared/types'

import { StyledLink } from '@/components/elements/StyledLink'
import { useActivePath } from '@/hooks/useActivePath'

const Button = styled.button<{ selected: boolean }>`
  display: flex;
  width: 100%;
  padding: 0 0 0 16px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.selected ? 'hsla(215, 78%, 30%, 0.83)' : props.theme.palette.grey};
  }
  background-color: ${(props) =>
    props.selected ? 'hsla(215, 78%, 30%, 0.83)' : props.theme.palette.dark03};
  border: ${(props) =>
    props.selected
      ? '1px solid ' + props.theme.palette.selectedBlueBorder
      : '1px solid transparent'};
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

const Title = styled.span<{ selected: boolean }>`
  color: ${(props) => (props.selected ? 'white' : props.theme.palette.text01)};
`

const Description = styled.p<{ selected: boolean }>`
  color: ${(props) => (props.selected ? 'white' : props.theme.palette.text02)};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  font-weight: 400;
`

const Author = styled.span<{ selected: boolean }>`
  font-size: 90%;
  color: ${(props) => (props.selected ? 'white' : props.theme.palette.text04)};
`

export const ExtensionsButton = ({
  icon,
  title,
  description,
  type,
  path,
}: Extension) => {
  const active = useActivePath(path)

  // const handleClick = () => {
  //   handleSetSelected(index)
  // }

  return (
    <StyledLink path={path}>
      <Button selected={active}>
        {icon}
        <Content>
          <Title selected={active}>{title}</Title>
          <Description selected={active}>{description}</Description>
          <Author selected={active}>{type}</Author>
        </Content>
      </Button>
    </StyledLink>
  )
}
