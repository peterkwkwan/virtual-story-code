import React from 'react'

import { BaseContentContainer } from '../shared/styledContainers'

import { LetterPressHome } from '@/components/elements/LetterPressHome'

const TIPS = [
  {
    text: 'Click on any article in the sidebar',
    src: '/assets/icons/arrow-left.png',
  },
]

export const Blog = () => {
  return (
    <BaseContentContainer>
      <LetterPressHome tips={TIPS} />
    </BaseContentContainer>
  )
}
