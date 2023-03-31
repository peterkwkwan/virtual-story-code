import React from 'react'

import { ExtensionWrapper } from './shared/ExtensionWrapper'

interface Props {
  logoSrc: string
  title: string
  description: string
}

export const ExtTemplate = ({ logoSrc, title, description }: Props) => {
  return (
    <ExtensionWrapper logoSrc={logoSrc} title={title} description={description}>
      React
    </ExtensionWrapper>
  )
}
