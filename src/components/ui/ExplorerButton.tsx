import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { ExplorerContext } from '../../App'
import { useIcon } from '../../hooks/useIcon'
import { StyledLink } from './StyledLink'

interface Props {
  title: string;
  path: string;
  selected?: boolean;
  icon?: unknown;
  isRoot?: boolean;
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

const StyledButton = styled.button<Props>`
  width: 100%;
  background-color: ${(props) =>
    props.selected ? 'hsla(215, 78%, 30%, 0.83)' : 'inherit'};
  border: ${(props) =>
    props.selected
      ? '1px solid ' + props.theme.palette.selectedBlueBorder
      : 'none'};
  color: inherit;
  line-height: ${(props) => (props.selected ? '20px' : '22px')};
  white-space: pre;
  font-size: 13px;
  text-align: start;
  font-family: Segoe WPC, Segoe UI, sans-serif;
  cursor: pointer;
  padding-left: ${(props) => calcPadding(props.isRoot, props.selected)};
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) =>
    !props.selected && props.theme.palette.grey};
  }
`

export const ExplorerButton = (props: Props) => {
  const { ...rest } = props
  const [selected, setSelected] = useState(false)
  const { currentFile } = useContext(ExplorerContext)
  const [, setFile] = currentFile

  const { pathname } = useLocation()
  const iconPath = useIcon(rest.title)

  useEffect(() => {
    if (pathname.includes(rest.path)) {
      setFile({ title: rest.title, path: rest.path })
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [pathname])

  const handleClick = () => {
    setFile({ title: rest.title, path: rest.path })
  }

  return (
    <StyledLink path={rest.path}>
      <StyledButton selected={selected} {...rest} onClick={handleClick}>
        <img style={{ width: 16, height: 16, marginRight: 4 }} src={iconPath} />
        {rest.title}
      </StyledButton>
    </StyledLink>
  )
}
