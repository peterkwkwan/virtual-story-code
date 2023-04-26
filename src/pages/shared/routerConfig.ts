import { Loading } from '../loading'
import { Home } from '../explorer/Home'
import { ExtensionsHome } from '../extensions'
import { BlogHome } from '../blog'
import { SearchHome } from '../search'
import { BlogList, BlogPageNames } from '../blog/BlogRouterConfig'
import { Acuris } from '../explorer/files/Acuris'
import { BurnabyNorth } from '../explorer/files/BurnabyNorth'
import { CathayDragon } from '../explorer/files/CathayDragon'
import { Coleman } from '../explorer/files/Coleman'
import { Gitignore } from '../explorer/files/Gitignore'
import { HKU } from '../explorer/files/HKU'
import { Manulife } from '../explorer/files/Manulife'
import { McGill } from '../explorer/files/McGill'
import { PackageJson } from '../explorer/files/PackageJson'
import { Serai } from '../explorer/files/Serai'
import { Pag } from '../explorer/files/Pag'
import { BCWGroup } from '../explorer/files/BCWGroup'
import { Readme } from '../explorer/files/Readme'
import { WillisTowersWatson } from '../explorer/files/WillisTowersWatson'
import {
  ExtensionsList,
  ExtPageNames,
} from '../extensions/ExtensionsRouterConfig'

export enum PagePaths {
  PAGE_LOADING = '',
  HOME = 'explorer',
  WTW = 'explorer/willis-towers-watson',
  BCW_GROUP = 'explorer/bcw-group',
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
  BLOG = 'blog',
  EXTENSIONS = 'extensions',
}

export enum PageNames {
  WTW = 'WillisTowersWatson.tsx',
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
  SEARCH = 'contact.me',
}

export interface RouterConfig {
  path: string
  component: () => JSX.Element
  fileName?: PageNames | ExtPageNames | BlogPageNames
}
export const routerConfig: RouterConfig[] = [
  {
    path: PagePaths.PAGE_LOADING,
    component: Loading,
  },
  {
    path: PagePaths.HOME,
    component: Home,
  },
  {
    path: PagePaths.WTW,
    component: WillisTowersWatson,
    fileName: PageNames.WTW,
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
    component: SearchHome,
    fileName: PageNames.SEARCH,
  },
  {
    path: PagePaths.BLOG,
    component: BlogHome,
  },
  {
    path: PagePaths.EXTENSIONS,
    component: ExtensionsHome,
  },
  ...ExtensionsList,
  ...BlogList,
]
