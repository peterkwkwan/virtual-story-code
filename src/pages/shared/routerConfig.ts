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
import { ExtensionsHome } from '../extensions/ExtensionsHome'
import { SearchContent } from '../search'
import { BCWGroup } from '../explorer/BCWGroup'
import { Readme } from '../explorer/Readme'
import { Home } from '../explorer/Home'
import { ExtensionsList, ExtPageNames, ExtPagePaths } from '../extensions'
import { WillisTowersWatson } from '../explorer/WillisTowersWatson'
import { Blog } from '../blog'

export enum PagePaths {
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

interface RouterConfig {
  path: PagePaths | ExtPagePaths
  component: () => JSX.Element
  fileName?: PageNames | ExtPageNames
}
export const routerConfig: RouterConfig[] = [
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
    component: SearchContent,
    fileName: PageNames.SEARCH,
  },
  {
    path: PagePaths.BLOG,
    component: Blog,
  },
  {
    path: PagePaths.EXTENSIONS,
    component: ExtensionsHome,
  },
  ...ExtensionsList,
]
