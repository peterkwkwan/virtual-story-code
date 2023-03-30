import { Acuris } from '../explorer/Acuris'
import { BurnabyNorth } from '../explorer/BurnabyNorth'
import { CathayDragon } from '../explorer/CathayDragon'
import { Coleman } from '../explorer/Coleman'
import { Gitignore } from '../explorer/Gitignore'
import { HKU } from '../explorer/HKU'
import { Manulife } from '../explorer/Manulife'
import { McGill } from '../explorer/McGill'
import { PackageJson } from '../explorer/PackageJson'
import { Serai } from '../explorer/Serai'
import { Pag } from '../explorer/Pag'
import { ExtensionsContent } from '../extensions/ExtensionsContent'
import { SearchContent } from '../search/SearchContent'
import { BCWGroup } from '../explorer/BCWGroup'
import { Readme } from '../explorer/Readme'
import { Home } from '../explorer/Home'
import { ExtReact } from '../extensions/ExtReact'
import { ExtReactRouter } from '../extensions/ExtReactRouter'
import { ExtReactQuery } from '../extensions/ExtReactQuery'
import { ExtCss } from '../extensions/ExtCss'
import { ExtHtml } from '../extensions/ExtHtml'
import { ExtJavascript } from '../extensions/ExtJavascript'
import { ExtTailwind } from '../extensions/ExtTailwind'
import { ExtTypescript } from '../extensions/ExtTypescript'
import { ExtStyledComponents } from '../extensions/ExtStyledComponents'
import { ExtMui } from '../extensions/ExtMui'
import { ExtStorybook } from '../extensions/ExtStorybook'
import { ExtStripe } from '../extensions/ExtStripe'
import { ExtGit } from '../extensions/ExtGit'

export enum PagePaths {
  HOME = 'explorer',
  BCW_GROUP = 'explorer/bcw',
  SERAI = 'explorer/serai',
  PAG = 'explorer/pag',
  MANULIFE = 'explorer/manulife',
  ACURIS = 'explorer/acuris',
  COLEMAN = 'explorer/coleman',
  CATHAY = 'explorer/cathay',
  MCGILL = 'explorer/mcgill',
  HKU = 'explorer/hku',
  BBYNORTH = 'explorer/bbynorth',
  PACKAGE_JSON = 'explorer/package_json',
  GIT_IGNORE = 'explorer/gitignore',
  README = 'explorer/readme',
  SEARCH = 'search',
  EXTENSIONS = 'extensions',
  EXT_REACT = 'extensions/react',
  EXT_REACTROUTER = 'extensions/react-router',
  EXT_REACTQUERY = 'extensions/react-query',
  EXT_JAVASCRIPT = 'extensions/javascript',
  EXT_TYPESCRIPT = 'extensions/typescript',
  EXT_HTML = 'extensions/html',
  EXT_CSS = 'extensions/css',
  EXT_STYLEDCOMPONENTS = 'extensions/styled-components',
  EXT_TAILWIND = 'extensions/tailwind',
  EXT_MUI = 'extensions/mui',
  EXT_STORYBOOK = 'extensions/storybook',
  EXT_STRIPE = 'extensions/stripe',
  EXT_GIT = 'extensions/git',
}

export enum PageNames {
  BCW_GROUP = 'BCWGroup.tsx',
  SERAI = 'Serai.tsx',
  PAG = 'PAG.tsx',
  MANULIFE = 'Manulife.tsx',
  ACURIS = 'Acuris.scss',
  COLEMAN = 'Coleman.scss',
  CATHAY = 'CathayDragon.test',
  MCGILL = 'McGill.html',
  HKU = 'HKU.html',
  BBYNORTH = 'BurnabyNorth.html',
  README = 'README.md',
  PACKAGE_JSON = 'package.json',
  GIT_IGNORE = '.gitignore',
  EXT_REACT = 'Skill: React',
  EXT_REACTROUTER = 'Skill: React Router',
  EXT_REACTQUERY = 'Skill: React Query',
  EXT_JAVASCRIPT = 'Skill: JavaScript',
  EXT_TYPESCRIPT = 'Skill: TypeScript',
  EXT_HTML = 'Skill: HTML',
  EXT_CSS = 'Skill: CSS',
  EXT_STYLEDCOMPONENTS = 'Skill: styled-components',
  EXT_TAILWIND = 'Skill: Tailwind',
  EXT_MUI = 'Skill: MUI',
  EXT_STORYBOOK = 'Skill: Storybook',
  EXT_STRIPE = 'Skill: Stripe',
  EXT_GIT = 'Skill: Git',
}

interface RouterConfig {
  path: PagePaths
  component: () => JSX.Element
  fileName?: PageNames
}
export const routerConfig: RouterConfig[] = [
  {
    path: PagePaths.HOME,
    component: Home,
  },
  {
    path: PagePaths.BCW_GROUP,
    component: BCWGroup,
    fileName: PageNames.BCW_GROUP,
  },
  {
    path: PagePaths.SERAI,
    component: Serai,
    fileName: PageNames.SERAI,
  },
  {
    path: PagePaths.PAG,
    component: Pag,
    fileName: PageNames.PAG,
  },
  {
    path: PagePaths.MANULIFE,
    component: Manulife,
    fileName: PageNames.MANULIFE,
  },
  {
    path: PagePaths.ACURIS,
    component: Acuris,
    fileName: PageNames.ACURIS,
  },
  {
    path: PagePaths.COLEMAN,
    component: Coleman,
    fileName: PageNames.COLEMAN,
  },
  {
    path: PagePaths.CATHAY,
    component: CathayDragon,
    fileName: PageNames.CATHAY,
  },
  {
    path: PagePaths.MCGILL,
    component: McGill,
    fileName: PageNames.MCGILL,
  },
  {
    path: PagePaths.HKU,
    component: HKU,
    fileName: PageNames.HKU,
  },
  {
    path: PagePaths.BBYNORTH,
    component: BurnabyNorth,
    fileName: PageNames.BBYNORTH,
  },
  {
    path: PagePaths.PACKAGE_JSON,
    component: PackageJson,
    fileName: PageNames.PACKAGE_JSON,
  },
  {
    path: PagePaths.GIT_IGNORE,
    component: Gitignore,
    fileName: PageNames.GIT_IGNORE,
  },
  {
    path: PagePaths.README,
    component: Readme,
    fileName: PageNames.README,
  },
  {
    path: PagePaths.SEARCH,
    component: SearchContent,
  },
  {
    path: PagePaths.EXTENSIONS,
    component: ExtensionsContent,
  },
  {
    path: PagePaths.EXT_REACT,
    component: ExtReact,
    fileName: PageNames.EXT_REACT,
  },
  {
    path: PagePaths.EXT_REACTROUTER,
    component: ExtReactRouter,
    fileName: PageNames.EXT_REACTROUTER,
  },
  {
    path: PagePaths.EXT_REACTQUERY,
    component: ExtReactQuery,
    fileName: PageNames.EXT_REACTQUERY,
  },
  {
    path: PagePaths.EXT_CSS,
    component: ExtCss,
    fileName: PageNames.EXT_CSS,
  },
  {
    path: PagePaths.EXT_HTML,
    component: ExtHtml,
    fileName: PageNames.EXT_HTML,
  },
  {
    path: PagePaths.EXT_JAVASCRIPT,
    component: ExtJavascript,
    fileName: PageNames.EXT_JAVASCRIPT,
  },
  {
    path: PagePaths.EXT_TYPESCRIPT,
    component: ExtTypescript,
    fileName: PageNames.EXT_TYPESCRIPT,
  },
  {
    path: PagePaths.EXT_STYLEDCOMPONENTS,
    component: ExtStyledComponents,
    fileName: PageNames.EXT_STYLEDCOMPONENTS,
  },
  {
    path: PagePaths.EXT_TAILWIND,
    component: ExtTailwind,
    fileName: PageNames.EXT_TAILWIND,
  },
  {
    path: PagePaths.EXT_MUI,
    component: ExtMui,
    fileName: PageNames.EXT_MUI,
  },
  {
    path: PagePaths.EXT_STORYBOOK,
    component: ExtStorybook,
    fileName: PageNames.EXT_STORYBOOK,
  },
  {
    path: PagePaths.EXT_STRIPE,
    component: ExtStripe,
    fileName: PageNames.EXT_STRIPE,
  },
  {
    path: PagePaths.EXT_GIT,
    component: ExtGit,
    fileName: PageNames.EXT_GIT,
  },
]
