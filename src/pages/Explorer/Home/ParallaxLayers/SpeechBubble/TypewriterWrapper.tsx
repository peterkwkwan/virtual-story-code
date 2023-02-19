import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'

const DescriptionText = styled.h6`
  color: ${(props) => props.theme.palette.white};
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
`

interface Props {
  text: string
  handleHideClickMe: () => void
  handleShowClickMe: () => void
}

export const TypewriterWrapper = ({
  text,
  handleHideClickMe,
  handleShowClickMe,
}: Props) => {
  return (
    <DescriptionText key={text}>
      <Typewriter
        options={{
          delay: 50,
          cursor: '',
        }}
        onInit={(typewriter) => {
          typewriter
            .callFunction(handleHideClickMe)
            .typeString(text)
            .start()
            .pauseFor(2000)
            .callFunction(handleShowClickMe)
        }}
      />
    </DescriptionText>
  )
}
