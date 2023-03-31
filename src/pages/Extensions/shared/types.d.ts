import React from 'react'

import { ExtPageNames, ExtPagePaths } from './ExtensionsList'

export interface Extension {
  title: string
  description: string
  path: ExtPagePaths
  icon: JSX.Element
  type: string
  fileName: ExtPageNames
  component: () => JSX.Element
}
