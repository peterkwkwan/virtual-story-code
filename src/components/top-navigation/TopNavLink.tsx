import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useActivePath } from '@/hooks/useActivePath'

interface Props {
  path: string
  name: string
  gradient: boolean
}

const StyledLink = styled(Link)<{ gradient: string; active: boolean }>`
  padding: 0 12px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: SF-Pro, sans-serif;
  text-decoration: none;
  height: 100%;
  color: ${(props) =>
    props.gradient === 'true'
      ? props.theme.palette.dark01
      : props.theme.palette.white};
  background-color: ${(props) =>
    props.active
      ? props.gradient === 'true'
        ? 'rgba(0, 0, 0, 0.1)'
        : 'rgba(255, 255, 255, 0.25)'
      : ''};
  :nth-of-type(1) {
    font-weight: 600;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const TopNavLink = ({ path, name, gradient }: Props) => {
  const isActive = useActivePath(path)
  return (
    <StyledLink
      to={path}
      gradient={gradient ? 'true' : 'false'}
      active={isActive}
    >
      {name}
    </StyledLink>
  )
}
