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
  width: 180px;
  height: 180px;
  border: 5px solid
    ${(props) => (props.isHovering ? props.theme.palette.vsCodeBlue : 'white')};
  filter: ${(props) =>
    props.isHovering ? 'grayscale(0%)' : 'grayscale(100%)'};
  transition: all 0.8s;
`

export const Avatar = ({ title, isHovering }: Props) => {
  return (
    <Image
      className="Avatar"
      isHovering={isHovering}
      alt={`${title}-avatar`}
      src={`/assets/images/search/${title.toLowerCase()}.png`}
    />
  )
}
