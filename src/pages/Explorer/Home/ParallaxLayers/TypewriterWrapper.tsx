import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'


const DescriptionText = styled.h6`
  color: ${(props) => props.theme.palette.white};
  font-size: 2.5rem;
  text-align: left;
  margin: 0;
`

interface Props {
  text: string
}

export const TypewriterWrapper = ({text} : Props) => {

  return (
    <DescriptionText key={text}>
      <Typewriter
        options={{
          delay: 70
        }}
        onInit={(typewriter) => {
          typewriter.typeString(text).start()
        }}
      />
    </DescriptionText>
  )
}
