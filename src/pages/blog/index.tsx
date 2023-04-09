import React from 'react'

import { BaseContentContainer } from '../shared/styledContainers'

import { LetterPressHome } from '@/components/elements/LetterPressHome'

const TIPS = [
  {
    text: 'Click on any article in the sidebar',
    src: '/assets/icons/arrow-left.svg',
  },
]

export const BlogHome = () => {
  return (
    <BaseContentContainer>
      <LetterPressHome tips={TIPS} />
    </BaseContentContainer>
  )
}
