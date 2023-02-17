import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  isHovering: boolean
}

interface ImgProps {
  isHovering: boolean
}

const Image = styled.img<ImgProps>`
  display: block;
  border-radius: 50%;
  border: 5px solid #5d00ff;
`

export const Avatar = ({ title, isHovering }: Props) => {
  return (
    <Image
      isHovering={isHovering}
      src={`/assets/images/search/${title.toLowerCase()}.png`}
    />
  )
}
