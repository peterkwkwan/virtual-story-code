import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  path: string
  name: string
  gradient: boolean
}

const StyledLink = styled(Link)<{ gradient?: boolean }>`
    margin-right: 16px;
    align-self: center;
    font-family: SF-Pro, sans-serif;
    text-decoration: none;
    color: ${(props) =>
    props.gradient ? props.theme.palette.dark01 : props.theme.palette.white};
    :nth-of-type(1) {
      font-weight: 600;
    }
    
`

export const TopNavLink = ({path, name, gradient} : Props) => {
  return (
    <StyledLink to={path} gradient={gradient}>{name}</StyledLink>
  )
}
