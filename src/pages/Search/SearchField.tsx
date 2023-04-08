import React from 'react'
import TypewriterComponent from 'typewriter-effect'

import { Icon, TextBox } from './shared/styled'

import { TextField } from '@/components/elements/TextField'

export const SearchField = () => {
  return (
    <TextBox>
      <TextField>
        {' '}
        <TypewriterComponent
          options={{ delay: 50 }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString('peter kwan: software engineer')
              .pauseFor(2500)
              .start()
          }}
        />
      </TextField>
      <Icon
        height={20}
        width={60}
        src="/assets/icons/search/searchbar-icons.png"
      />
    </TextBox>
  )
}
