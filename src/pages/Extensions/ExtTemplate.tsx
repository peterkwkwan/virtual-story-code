import React from 'react'

import { ExtensionWrapper } from './shared/ExtensionWrapper'
import { ExtComponentProps } from './shared/types'

export const ExtTemplate = ({
  logoSrc,
  title,
  description,
}: ExtComponentProps) => {
  return (
    <ExtensionWrapper logoSrc={logoSrc} title={title} description={description}>
      React
    </ExtensionWrapper>
  )
}
