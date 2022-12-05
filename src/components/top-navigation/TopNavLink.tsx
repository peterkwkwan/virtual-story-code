import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  path: string
  name: string
  gradient: boolean
}

const StyledLink = styled(Link)<{ gradient?: boolean }>`
    padding: 0 12px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: SF-Pro, sans-serif;
    text-decoration: none;
    height: 100%;
    color: ${(props) =>
    props.gradient ? props.theme.palette.dark01 : props.theme.palette.white};
    :nth-of-type(1) {
      font-weight: 600;
    }
    &:hover {
      background-color: rgba(0,0,0,0.1);
    }
`

export const TopNavLink = ({path, name, gradient} : Props) => {
  return (
    <StyledLink to={path} gradient={gradient}>{name}</StyledLink>
  )
}
