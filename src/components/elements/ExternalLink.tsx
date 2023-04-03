import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.palette.hyperlink};
  :hover {
    text-decoration: underline;
  }
`

interface Props {
  href: string
  text: string
  style?: React.CSSProperties
}

export const ExternalLink = ({ href, text, style }: Props) => {
  return (
    <Link style={style} href={href} target="_blank">
      {text}
    </Link>
  )
}
