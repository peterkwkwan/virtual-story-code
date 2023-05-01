import React from 'react'
import styled from 'styled-components'

import { BlogsPagePaths } from './BlogRouterConfig'
import { Blogs } from './shared/constants'

import { useActivePath } from '@/hooks/useActivePath'
import { UnstyledLink } from '@/components/elements/UnstyledLink'

const BlogItem = styled.div<{ selected: boolean }>`
  position: relative;
  background-color: ${(props) =>
    props.selected ? 'hsla(215, 78%, 30%, 0.83)' : 'transparent'};
  border: ${(props) =>
    props.selected
      ? '1px solid ' + props.theme.palette.selectedBlueBorder
      : '1px solid transparent'};
  a,
  span,
  button {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :not(:first-of-type) {
    margin-top: 8px;
  }
  :hover {
    background-color: ${(props) =>
      props.selected ? 'hsla(215, 78%, 30%, 0.83)' : props.theme.palette.grey};
  }
`

const BlogButton = styled.div`
  cursor: pointer;
  padding: 4px 0 24px 20px;
  span {
    user-select: none;
  }
`

const BlogTitle = styled.span<{ selected: boolean }>`
  display: block;
  user-select: none;
  font-size: 0.875rem;
  width: 100%;
  color: ${(props) => (props.selected ? 'white' : props.theme.palette.text01)};
`

const BlogDate = styled.span<{ selected: boolean }>`
  font-size: 0.8rem;
  font-weight: 200;
  color: ${(props) => (props.selected ? 'white' : props.theme.palette.text04)};
`

const BlogLink = styled.a<{ selected: boolean }>`
  position: absolute;
  bottom: 4px;
  left: 20px;
  width: min-content;
  align-items: center;
  color: ${(props) => (props.selected ? 'white' : props.theme.palette.text03)};
  font-size: 0.75rem;
  text-decoration: none;
  user-select: none;
  :hover {
    color: ${(props) =>
      props.selected ? 'white' : props.theme.palette.text02};
    text-decoration: underline;
  }
`

export interface BlogButtonProps {
  title: Blogs
  date: string
  url: string
  internalPath: BlogsPagePaths
}

export const BlogSidebarButton = ({
  title,
  date,
  url,
  internalPath,
}: BlogButtonProps) => {
  const active = useActivePath(internalPath)

  return (
    <BlogItem selected={active}>
      <UnstyledLink path={internalPath}>
        <BlogButton>
          <BlogTitle selected={active}>{title}</BlogTitle>
          <BlogDate selected={active}>{date}</BlogDate>
        </BlogButton>
      </UnstyledLink>
      <BlogLink selected={active} href={url} target="_blank">
        <img
          src="/assets/images/search/medium.webp"
          style={{ width: '12px', height: '12px', marginRight: '4px' }}
          alt="Medium Logo"
        />
        View on Medium
      </BlogLink>
    </BlogItem>
  )
}
