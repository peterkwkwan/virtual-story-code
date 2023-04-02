export enum Skills {
  REACT = 'React',
  JAVASCRIPT = 'JavaScript',
  TYPESCRIPT = 'TypeScript',
  PYTHON = 'Python',
  CSHARP = 'C#',
  UNITY = 'Unity',
  HTML = 'HTML',
  CSS = 'CSS',
  STYLED_COMPONENTS = 'styled-components',
  TAILWIND = 'Tailwind CSS',
  MUI = 'Material UI',
  REACT_ROUTER = 'React Router',
  REACT_QUERY = 'React Query',
  STORYBOOK = 'Storybook',
  STRIPE = 'Stripe.js',
  GIT = 'Git',
}

export type ResourceLinks = { [key: string]: string }

type ResourceLinkMapping = { [key: string]: ResourceLinks }

export const Resources: ResourceLinkMapping = {
  [Skills.REACT]: { 'Official React Docs': 'https://react.dev/' },
}
