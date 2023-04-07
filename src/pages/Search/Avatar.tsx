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
  border: 5px solid
    ${(props) => (props.isHovering ? props.theme.palette.vsCodeBlue : 'white')};
  filter: ${(props) => (props.isHovering ? 'grayscale(0%)' : 'grayscale(80%)')};
  transition: all 0.8s;
`

export const Avatar = ({ title, isHovering }: Props) => {
  return (
    <Image
      isHovering={isHovering}
      src={`/assets/images/search/${title.toLowerCase()}.png`}
    />
  )
}
