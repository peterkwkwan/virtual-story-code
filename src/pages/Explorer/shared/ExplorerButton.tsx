import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { File } from './types'

import { ExplorerContext } from '@/App'
import { UnstyledLink } from '@/components/elements/UnstyledLink'
import { useIcon } from '@/hooks/useIcon'
import { useActivePath } from '@/hooks/useActivePath'

interface Props extends File {
  selected?: boolean
  icon?: unknown
  isRoot?: boolean
}

const calcPadding = (
  isRoot: boolean | undefined,
  selected: boolean | undefined
) => {
  const selectedPx = selected ? 0 : 1
  const rootPx = 13
  const nonRootPx = 23

  return `${selectedPx + (isRoot ? rootPx : nonRootPx)}px`
}

const StyledButton = styled.span<Props>`
  width: 100%;
  background-color: ${(props) =>
    props.selected ? 'hsla(215, 78%, 30%, 0.83)' : 'inherit'};
  border: ${(props) =>
    props.selected
      ? '1px solid ' + props.theme.palette.selectedBlueBorder
      : 'none'};
  color: ${(props) => (props.selected ? 'white' : 'inherit')};
  line-height: ${(props) => (props.selected ? '20px' : '22px')};
  white-space: pre;
  font-size: 13px;
  text-align: start;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
  padding-left: ${(props) => calcPadding(props.isRoot, props.selected)};
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) => !props.selected && props.theme.palette.grey};
  }
`

export const ExplorerButton = (props: Props) => {
  const { ...rest } = props
  const active = useActivePath(rest.path)
  const { currentFile } = useContext(ExplorerContext)
  const [, setFile] = currentFile

  const { pathname } = useLocation()
  const iconPath = useIcon(rest.title)

  useEffect(() => {
    if (pathname.includes(rest.path)) {
      setFile({ title: rest.title, path: rest.path })
    }
  }, [pathname])

  return (
    <UnstyledLink path={rest.path}>
      <StyledButton
        selected={active}
        {...rest}
        aria-label={`Go to ${rest.title}`}
      >
        <img
          style={{ width: 16, height: 16, marginRight: 4 }}
          src={iconPath}
          alt={`icon${rest.title}`}
        />
        {rest.title}
      </StyledButton>
    </UnstyledLink>
  )
}
