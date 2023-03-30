import React from 'react'
import styled from 'styled-components'

import { Extension } from './types'

import { PagePaths } from '@/pages/shared/routerConfig'

const ExtensionIcon = styled.img`
  width: 42px;
  height: 42px;
  padding: 10px 14px 10px 0;
`

export const ExtensionsList: Extension[] = [
  {
    name: 'React',
    icon: <ExtensionIcon src="/assets/icons/extensions/react.svg" />,
    url: PagePaths.EXT_REACT,
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'Frontend framework',
  },
  {
    name: 'React Router',
    icon: <ExtensionIcon src="/assets/icons/extensions/router.png" />,
    url: PagePaths.EXT_REACTROUTER,
    description:
      'Routing framework that enables easier client and server-side routing in React applications',
    type: 'React Library',
  },
  {
    name: 'React Query',
    icon: <ExtensionIcon src="/assets/icons/extensions/query.png" />,
    url: PagePaths.EXT_REACTQUERY,
    description:
      'Data-fetching library that helps with fetching, caching, synchronising, and updating the server state in React applications',
    type: 'React Library',
  },
  {
    name: 'JavaScript',
    icon: <ExtensionIcon src="/assets/icons/extensions/javascript.svg" />,
    url: PagePaths.EXT_JAVASCRIPT,
    description:
      'Scripting or programming language that enables programmers to implement complex features on web pages',
    type: 'Programming language',
  },
  {
    name: 'TypeScript',
    icon: <ExtensionIcon src="/assets/icons/extensions/typescript.svg" />,
    url: PagePaths.EXT_TYPESCRIPT,
    description: 'Superset of JavaScript that adds type safety to projects',
    type: 'Programming language',
  },
  {
    name: 'HTML',
    icon: <ExtensionIcon src="/assets/icons/extensions/html.svg" />,
    url: PagePaths.EXT_HTML,
    description: 'Standard markup language for creating Web pages.',
    type: 'Frontend',
  },
  {
    name: 'CSS',
    icon: <ExtensionIcon src="/assets/icons/extensions/css.svg" />,
    url: PagePaths.EXT_CSS,
    description:
      'Stylesheet language used to describe the presentation of a document written in HTML',
    type: 'Frontend',
  },
  {
    name: 'styled-components',
    icon: <ExtensionIcon src="/assets/icons/extensions/styled.svg" />,
    url: PagePaths.EXT_STYLEDCOMPONENTS,
    description:
      'CSS-in-JS styling solution that allows developers to write actual CSS code in JavaScript files to style React components',
    type: 'UI library',
  },
  {
    name: 'Tailwind CSS',
    icon: <ExtensionIcon src="/assets/icons/extensions/tailwind.png" />,
    url: PagePaths.EXT_TAILWIND,
    description:
      'CSS framework that provides single-purpose utility classes for rapid app development',
    type: 'UI library',
  },
  {
    name: 'Material UI',
    icon: <ExtensionIcon src="/assets/icons/extensions/mui.svg" />,
    url: PagePaths.EXT_MUI,
    description:
      "React ready-for-production component library that implements Google's Material Design",
    type: 'UI library',
  },
  {
    name: 'Storybook',
    icon: <ExtensionIcon src="/assets/icons/extensions/storybook.png" />,
    url: PagePaths.EXT_STORYBOOK,
    description:
      'Development environment tool that is used as a playground for UI components',
    type: 'UI development tool',
  },
  {
    name: 'Stripe.js',
    icon: <ExtensionIcon src="/assets/icons/extensions/stripe.png" />,
    url: PagePaths.EXT_STRIPE,
    description:
      "Stripe's JavaScript API allowing businesses to collect payment and customer details using customizable Stripe Elements",
    type: 'Payment Gateway',
  },
  {
    name: 'Git',
    icon: <ExtensionIcon src="/assets/icons/extensions/git.png" />,
    url: PagePaths.EXT_GIT,
    description:
      'Source code management tool for development collaboration and team organization',
    type: 'Source control',
  },
]
