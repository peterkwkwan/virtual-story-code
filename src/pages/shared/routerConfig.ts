import { Acuris } from '../explorer/Acuris'
import { BurnabyNorth } from '../explorer/BurnabyNorth'
import { CathayDragon } from '../explorer/CathayDragon'
import { Coleman } from '../explorer/Coleman'
import { Gitignore } from '../explorer/Gitignore'
import { HKU } from '../explorer/HKU'
import { Manulife } from '../explorer/Manulife'
import { McGill } from '../explorer/McGill'
import { PackageJson } from '../explorer/PackageJson'
import { Readme } from '../explorer/Readme'
import { Serai } from '../explorer/Serai'
import { Pag } from '../explorer/Pag'
import { ExtensionsContent } from '../extensions/ExtensionsContent'
import { SearchContent } from '../search/SearchContent'
import { BCWGroup } from '../explorer/BCWGroup'

export enum PagePaths {
  HOME = '',
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
}

interface RouterConfig {
  path: string;
  component: () => JSX.Element;
}
export const routerConfig: RouterConfig[] = [
  {
    path: PagePaths.BCW_GROUP,
    component: BCWGroup,
  },
  {
    path: PagePaths.SERAI,
    component: Serai,
  },
  {
    path: PagePaths.PAG,
    component: Pag,
  },
  {
    path: PagePaths.MANULIFE,
    component: Manulife,
  },
  {
    path: PagePaths.ACURIS,
    component: Acuris,
  },
  {
    path: PagePaths.COLEMAN,
    component: Coleman,
  },
  {
    path: PagePaths.CATHAY,
    component: CathayDragon,
  },
  {
    path: PagePaths.MCGILL,
    component: McGill,
  },
  {
    path: PagePaths.HKU,
    component: HKU,
  },
  {
    path: PagePaths.BBYNORTH,
    component: BurnabyNorth,
  },
  {
    path: PagePaths.PACKAGE_JSON,
    component: PackageJson,
  },
  {
    path: PagePaths.GIT_IGNORE,
    component: Gitignore,
  },
  {
    path: PagePaths.README,
    component: Readme,
  },
  {
    path: PagePaths.SEARCH,
    component: SearchContent,
  },
  {
    path: PagePaths.EXTENSIONS,
    component: ExtensionsContent,
  },
]
