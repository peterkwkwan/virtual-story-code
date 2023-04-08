import React from 'react'
import styled from 'styled-components'

import { BaseContentContainer } from '../shared/styledContainers'

import { LetterPressHome } from '@/components/elements/LetterPressHome'

const TIPS = [
  {
    text: 'Select my skills in the left sidebar',
    src: '/assets/icons/arrow-left.png',
  },
  {
    text: 'Use the searchbox to filter skills',
    src: '/assets/icons/search.png',
  },
]

export const ExtensionsHome = () => {
  return (
    <BaseContentContainer>
      <LetterPressHome tips={TIPS} />
    </BaseContentContainer>
  )
}
