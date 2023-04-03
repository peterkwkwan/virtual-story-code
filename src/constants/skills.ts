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
  [Skills.REACT]: {
    'Official React Docs': 'https://react.dev/',
    'React Developer Tools': 'https://react.dev/learn/react-developer-tools',
    'VSCode React snippets':
      'https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets',
  },
  [Skills.JAVASCRIPT]: {
    'JavaScript - MDN':
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  [Skills.TYPESCRIPT]: {
    'TypeScript Docs': 'https://www.typescriptlang.org/docs/',
  },
  [Skills.PYTHON]: { 'Python Docs': 'https://docs.python.org/3/' },
  [Skills.CSHARP]: {
    'C# Docs': 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },
  [Skills.UNITY]: {
    'Official Unity Site': 'https://unity.com/',
    'Learn Unity': 'https://learn.unity.com/',
  },
  [Skills.HTML]: {
    'HTML - MDN': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    'HTML Tag Memory Test': 'https://codepen.io/plfstr/full/zYqQeRw',
  },
  [Skills.CSS]: {
    'CSS - MDN': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    'CSS Tricks': 'https://css-tricks.com/',
    'CSS Properties Memory Test': 'https://codepen.io/bramus/full/rNMbOxz',
  },
  [Skills.STYLED_COMPONENTS]: {
    'Official styled-components Site': 'https://styled-components.com/',
    'vscode-styled-components extension':
      'https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components',
    'CSS to React JSS': 'https://sudos.tools/css-to-jss',
  },
  [Skills.TAILWIND]: {
    'Official Tailwind Site': 'https://tailwindcss.com/',
    'Tailwind Docs': 'https://v2.tailwindcss.com/docs',
    'Tailwind CSS IntelliSense':
      'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss',
  },
  [Skills.MUI]: {
    'MUI Docs': 'https://mui.com/material-ui/getting-started/overview/',
    'MUI Snippets (v5)':
      'https://marketplace.visualstudio.com/items?itemName=vscodeshift.mui-snippets',
    'Material-UI Snippets (v4)':
      'https://marketplace.visualstudio.com/items?itemName=vscodeshift.material-ui-snippets',
  },
  [Skills.REACT_ROUTER]: {
    'Official React Router Site': 'https://reactrouter.com/en/main',
    'React Router Docs': 'https://reactrouter.com/en/main',
  },
  [Skills.REACT_QUERY]: {
    'Official TanStack Query Site': 'https://tanstack.com/query/latest',
    'React Query Docs': 'https://tanstack.com/query/v3/docs/react/overview',
    'Official Devtools': 'https://tanstack.com/query/v4/docs/react/devtools',
  },
  [Skills.STORYBOOK]: {
    'Official Storybook Site': 'https://storybook.js.org/',
    'Storybook Docs': 'https://storybook.js.org/docs/react/get-started/install',
  },
  [Skills.STRIPE]: {
    Stripe: 'https://stripe.com/',
    'Stripe.js Docs': 'https://stripe.com/docs/js',
    'React Stripe.js SDK': 'https://stripe.com/docs/stripe-js/react',
  },
  [Skills.GIT]: {
    Git: 'https://git-scm.com/',
    'Learn Git Branching': 'https://learngitbranching.js.org/',
  },
}
