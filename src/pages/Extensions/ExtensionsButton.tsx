import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import { ExtensionConfig } from './shared/types'

import { UnstyledLink } from '@/components/elements/UnstyledLink'
import { useActivePath } from '@/hooks/useActivePath'
import { ExplorerContext } from '@/App'
import SkeletonImage from '@/components/elements/SkeletonImage'

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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  iconSrc,
  title,
  description,
  type,
  path,
}: ExtensionConfig) => {
  const active = useActivePath(path)
  const { pathname } = useLocation()
  const { currentFile } = useContext(ExplorerContext)
  const [, setFile] = currentFile

  useEffect(() => {
    if (pathname.includes(path)) {
      setFile({ title: `Skill: ${title}`, path: path })
    }
  }, [pathname])

  return (
    <UnstyledLink path={path}>
      <Button selected={active} aria-label="Select skill">
        <SkeletonImage
          src={iconSrc}
          alt={`icon-${title}`}
          width={42}
          height={42}
          style={{ margin: '10px 14px 10px 0' }}
        />
        <Content>
          <Title selected={active}>{title}</Title>
          <Description selected={active}>{description}</Description>
          <Author selected={active}>{type}</Author>
        </Content>
      </Button>
    </UnstyledLink>
  )
}
