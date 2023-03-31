import React from 'react'
import styled from 'styled-components'

import { Extension } from './types'
import { ExtTemplate } from '../ExtTemplate'

export enum ExtPagePaths {
  EXT_REACT = 'extensions/react',
  EXT_REACTROUTER = 'extensions/react-router',
  EXT_REACTQUERY = 'extensions/react-query',
  EXT_JAVASCRIPT = 'extensions/javascript',
  EXT_TYPESCRIPT = 'extensions/typescript',
  EXT_PYTHON = 'extensions/python',
  EXT_CSHARP = 'extensions/c-sharp',
  EXT_UNITY = 'extensions/unity',
  EXT_HTML = 'extensions/html',
  EXT_CSS = 'extensions/css',
  EXT_STYLEDCOMPONENTS = 'extensions/styled-components',
  EXT_TAILWIND = 'extensions/tailwind',
  EXT_MUI = 'extensions/mui',
  EXT_STORYBOOK = 'extensions/storybook',
  EXT_STRIPE = 'extensions/stripe',
  EXT_GIT = 'extensions/git',
}

export enum ExtPageNames {
  EXT_REACT = 'Skill: React',
  EXT_REACTROUTER = 'Skill: React Router',
  EXT_REACTQUERY = 'Skill: React Query',
  EXT_JAVASCRIPT = 'Skill: JavaScript',
  EXT_TYPESCRIPT = 'Skill: TypeScript',
  EXT_PYTHON = 'Skill: Python',
  EXT_CSHARP = 'Skill: C#',
  EXT_UNITY = 'Skill: Unity',
  EXT_HTML = 'Skill: HTML',
  EXT_CSS = 'Skill: CSS',
  EXT_STYLEDCOMPONENTS = 'Skill: styled-components',
  EXT_TAILWIND = 'Skill: Tailwind',
  EXT_MUI = 'Skill: MUI',
  EXT_STORYBOOK = 'Skill: Storybook',
  EXT_STRIPE = 'Skill: Stripe',
  EXT_GIT = 'Skill: Git',
}

const ExtensionIcon = styled.img`
  width: 42px;
  height: 42px;
  padding: 10px 14px 10px 0;
`

const LogoSrc = {
  [ExtPageNames.EXT_REACT]: '/assets/icons/extensions/react.svg',
  [ExtPageNames.EXT_REACTROUTER]: '/assets/icons/extensions/router.svg',
  [ExtPageNames.EXT_REACTQUERY]: '/assets/icons/extensions/query.png',
  [ExtPageNames.EXT_JAVASCRIPT]: '/assets/icons/extensions/javascript.svg',
  [ExtPageNames.EXT_TYPESCRIPT]: '/assets/icons/extensions/typescript.svg',
  [ExtPageNames.EXT_PYTHON]: '/assets/icons/extensions/python.svg',
  [ExtPageNames.EXT_CSHARP]: '/assets/icons/extensions/c-sharp.svg',
  [ExtPageNames.EXT_UNITY]: '/assets/icons/extensions/unity.png',
  [ExtPageNames.EXT_HTML]: '/assets/icons/extensions/html.svg',
  [ExtPageNames.EXT_CSS]: '/assets/icons/extensions/css.svg',
  [ExtPageNames.EXT_STYLEDCOMPONENTS]:
    '/assets/icons/extensions/styled-components.svg',
  [ExtPageNames.EXT_TAILWIND]: '/assets/icons/extensions/tailwind.svg',
  [ExtPageNames.EXT_MUI]: '/assets/icons/extensions/mui.svg',
  [ExtPageNames.EXT_STORYBOOK]: '/assets/icons/extensions/storybook.svg',
  [ExtPageNames.EXT_STRIPE]: '/assets/icons/extensions/stripe.png',
  [ExtPageNames.EXT_GIT]: '/assets/icons/extensions/git.svg',
}

export const ExtensionsList: Extension[] = [
  {
    title: 'React',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_REACT]} />,
    path: ExtPagePaths.EXT_REACT,
    description:
      'Open-source front-end JavaScript library for building user interfaces based on UI components',
    type: 'Frontend framework',
    fileName: ExtPageNames.EXT_REACT,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_REACT],
      })
    },
  },
  {
    title: 'React Router',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_REACTROUTER]} />,
    path: ExtPagePaths.EXT_REACTROUTER,
    description:
      'Routing framework that enables easier client and server-side routing in React applications',
    type: 'React Library',
    fileName: ExtPageNames.EXT_REACTROUTER,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_REACTROUTER],
      })
    },
  },
  {
    title: 'React Query',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_REACTQUERY]} />,
    path: ExtPagePaths.EXT_REACTQUERY,
    description:
      'Data-fetching library that helps with fetching, caching, synchronising, and updating the server state in React applications',
    type: 'React Library',
    fileName: ExtPageNames.EXT_REACTQUERY,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_REACTQUERY],
      })
    },
  },
  {
    title: 'JavaScript',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_JAVASCRIPT]} />,
    path: ExtPagePaths.EXT_JAVASCRIPT,
    description:
      'Scripting or programming language that enables programmers to implement complex features on web pages',
    type: 'Programming language',
    fileName: ExtPageNames.EXT_JAVASCRIPT,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_JAVASCRIPT],
      })
    },
  },
  {
    title: 'TypeScript',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_TYPESCRIPT]} />,
    path: ExtPagePaths.EXT_TYPESCRIPT,
    description: 'Superset of JavaScript that adds type safety to projects',
    type: 'Programming language',
    fileName: ExtPageNames.EXT_TYPESCRIPT,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_TYPESCRIPT],
      })
    },
  },
  {
    title: 'Python',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_PYTHON]} />,
    path: ExtPagePaths.EXT_PYTHON,
    description: 'High-level, general-purpose programming language',
    type: 'Programming language',
    fileName: ExtPageNames.EXT_PYTHON,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_PYTHON],
      })
    },
  },
  {
    title: 'C#',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_CSHARP]} />,
    path: ExtPagePaths.EXT_CSHARP,
    description:
      'Strongly typed, general-purpose programming language used to create desktop applications, cloud services and video games',
    type: 'Programming language',
    fileName: ExtPageNames.EXT_CSHARP,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_CSHARP],
      })
    },
  },
  {
    title: 'Unity',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_UNITY]} />,
    path: ExtPagePaths.EXT_UNITY,
    description:
      'Game development tool built on C# that enables creation of 2D, 3D and VR video games.',
    type: 'Game development',
    fileName: ExtPageNames.EXT_UNITY,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_UNITY],
      })
    },
  },
  {
    title: 'HTML',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_HTML]} />,
    path: ExtPagePaths.EXT_HTML,
    description: 'Standard markup language for creating Web pages.',
    type: 'Frontend',
    fileName: ExtPageNames.EXT_HTML,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_HTML],
      })
    },
  },
  {
    title: 'CSS',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_CSS]} />,
    path: ExtPagePaths.EXT_CSS,
    description:
      'Stylesheet language used to describe the presentation of a document written in HTML',
    type: 'Frontend',
    fileName: ExtPageNames.EXT_CSS,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_CSS],
      })
    },
  },
  {
    title: 'styled-components',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_STYLEDCOMPONENTS]} />,
    path: ExtPagePaths.EXT_STYLEDCOMPONENTS,
    description:
      'CSS-in-JS styling solution that allows developers to write actual CSS code in JavaScript files to style React components',
    type: 'UI library',
    fileName: ExtPageNames.EXT_STYLEDCOMPONENTS,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_STYLEDCOMPONENTS],
      })
    },
  },
  {
    title: 'Tailwind CSS',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_TAILWIND]} />,
    path: ExtPagePaths.EXT_TAILWIND,
    description:
      'CSS framework that provides single-purpose utility classes for rapid app development',
    type: 'UI library',
    fileName: ExtPageNames.EXT_TAILWIND,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_TAILWIND],
      })
    },
  },
  {
    title: 'Material UI',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_MUI]} />,
    path: ExtPagePaths.EXT_MUI,
    description:
      "React ready-for-production component library that implements Google's Material Design",
    type: 'UI library',
    fileName: ExtPageNames.EXT_MUI,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_MUI],
      })
    },
  },
  {
    title: 'Storybook',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_STORYBOOK]} />,
    path: ExtPagePaths.EXT_STORYBOOK,
    description:
      'Development environment tool that is used as a playground for UI components',
    type: 'UI development tool',
    fileName: ExtPageNames.EXT_STORYBOOK,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_STORYBOOK],
      })
    },
  },
  {
    title: 'Stripe.js',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_STRIPE]} />,
    path: ExtPagePaths.EXT_STRIPE,
    description:
      "Stripe's JavaScript API allowing businesses to collect payment and customer details using customizable Stripe Elements",
    type: 'Payment Gateway',
    fileName: ExtPageNames.EXT_STRIPE,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_STRIPE],
      })
    },
  },
  {
    title: 'Git',
    icon: <ExtensionIcon src={LogoSrc[ExtPageNames.EXT_GIT]} />,
    path: ExtPagePaths.EXT_GIT,
    description:
      'Source code management tool for development collaboration and team organization',
    type: 'Source control',
    fileName: ExtPageNames.EXT_GIT,
    component: function () {
      return ExtTemplate({
        title: this.title,
        description: this.description,
        logoSrc: LogoSrc[ExtPageNames.EXT_GIT],
      })
    },
  },
]
