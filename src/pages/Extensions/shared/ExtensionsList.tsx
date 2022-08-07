import React from 'react'
import styled from 'styled-components'

import { Extension } from './types'

const ExtensionIcon = styled.img`
  width: 42px;
  height: 42px;
  padding: 10px 14px 10px 0;
`

export const ExtensionsList: Extension[] = [
  {
    name: 'React',
    icon: <ExtensionIcon src="../../assets/icons/extensions/react.svg" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'Frontend framework',
  },
  {
    name: 'React Router',
    icon: <ExtensionIcon src="../../assets/icons/extensions/query.png" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'Asynchronous data handling library',
  },
  {
    name: 'React Query',
    icon: <ExtensionIcon src="../../assets/icons/extensions/query.png" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'Asynchronous data handling library',
  },
  {
    name: 'JavaScript',
    icon: <ExtensionIcon src="../../assets/icons/extensions/javascript.svg" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'Programming language',
  },
  {
    name: 'TypeScript',
    icon: <ExtensionIcon src="../../assets/icons/extensions/typescript.svg" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'Programming language',
  },
  {
    name: 'HTML',
    icon: <ExtensionIcon src="../../assets/icons/extensions/html.svg" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'Frontend',
  },
  {
    name: 'CSS',
    icon: <ExtensionIcon src="../../assets/icons/extensions/css.svg" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'Frontend',
  },
  {
    name: 'styled-components',
    icon: <ExtensionIcon src="../../assets/icons/extensions/styled.svg" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'UI library',
  },
  {
    name: 'Tailwind CSS',
    icon: <ExtensionIcon src="../../assets/icons/extensions/tailwind.png" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'UI library',
  },
  {
    name: 'Material UI',
    icon: <ExtensionIcon src="../../assets/icons/extensions/mui.svg" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'UI library',
  },
  {
    name: 'Storybook',
    icon: <ExtensionIcon src="../../assets/icons/extensions/storybook.png" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'UI development tool',
  },
  {
    name: 'Stripe.js',
    icon: <ExtensionIcon src="../../assets/icons/extensions/git.png" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'Payment Gateway',
  },
  {
    name: 'Git',
    icon: <ExtensionIcon src="../../assets/icons/extensions/git.png" />,
    url: '',
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'Source control',
  },
]
