import React from 'react'
import styled from 'styled-components'

import { ExtensionContentWrapper } from './ExtensionContentWrapper'
import { Extension } from './shared/types'
import { generateTabs } from './tabs'

import { Companies } from '@/constants/companies'
import { Projects } from '@/constants/projects'
import { Resources, Skills } from '@/constants/skills'

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
    proficiency: 'Expert',
    rating: 5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_REACT],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [
            Companies.WTW,
            Companies.BCW,
            Companies.SERAI,
            Companies.PAG,
          ],
        }),
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
    proficiency: 'Expert',
    rating: 5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_JAVASCRIPT],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [
            Companies.WTW,
            Companies.BCW,
            Companies.SERAI,
            Companies.PAG,
            Companies.MANULIFE,
          ],
        }),
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
    proficiency: 'Expert',
    rating: 5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_TYPESCRIPT],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [
            Companies.WTW,
            Companies.BCW,
            Companies.SERAI,
            Companies.PAG,
            Companies.MANULIFE,
          ],
        }),
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
    proficiency: 'Intermediate',
    rating: 3,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_PYTHON],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [Companies.SERAI, Companies.BCW],
        }),
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
    proficiency: 'Functional',
    rating: 2.5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_CSHARP],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [Companies.WTW, Companies.PAG],
        }),
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
    proficiency: 'Hobbyist',
    rating: 1.5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_UNITY],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [Companies.SERAI, Companies.BCW],
        }),
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
    proficiency: 'Expert',
    rating: 5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_HTML],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [
            Companies.WTW,
            Companies.BCW,
            Companies.SERAI,
            Companies.PAG,
            Companies.MANULIFE,
          ],
        }),
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
    proficiency: 'Expert',
    rating: 5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_CSS],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [
            Companies.WTW,
            Companies.BCW,
            Companies.SERAI,
            Companies.PAG,
            Companies.MANULIFE,
          ],
        }),
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
    proficiency: 'Advanced',
    rating: 4.5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_STYLEDCOMPONENTS],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [Companies.WTW, Companies.SERAI],
        }),
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
    proficiency: 'Intermediate',
    rating: 3,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_TAILWIND],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [Companies.MANULIFE],
        }),
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
    proficiency: 'Advanced',
    rating: 4.5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_MUI],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [Companies.WTW, Companies.BCW, Companies.SERAI],
        }),
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
    proficiency: 'Intermediate',
    rating: 3.5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_REACTROUTER],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [Companies.BCW, Companies.SERAI],
        }),
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
    proficiency: 'Intermediate',
    rating: 3.5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_REACTQUERY],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [Companies.BCW, Companies.SERAI],
        }),
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
    proficiency: 'Intermediate',
    rating: 3,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_STORYBOOK],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [Companies.SERAI],
        }),
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
    proficiency: 'Intermediate',
    rating: 3.5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_STRIPE],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [Companies.BCW],
        }),
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
    proficiency: 'Advanced',
    rating: 4.5,
    component: function () {
      return ExtensionContentWrapper({
        title: this.title,
        type: this.type,
        description: this.description,
        proficiency: this.proficiency,
        rating: this.rating,
        logoSrc: LogoSrc[ExtPageNames.EXT_GIT],
        resourceLinks: Resources[Skills.REACT],
        tabs: generateTabs({
          title: this.title,
          companies: [
            Companies.WTW,
            Companies.BCW,
            Companies.SERAI,
            Companies.PAG,
            Companies.MANULIFE,
          ],
        }),
      })
    },
  },
]
