import { Acuris } from "../components/explorer-pages/Acuris";
import { BurnabyNorth } from "../components/explorer-pages/BurnabyNorth";
import { CathayDragon } from "../components/explorer-pages/CathayDragon";
import { Coleman } from "../components/explorer-pages/Coleman";
import { Gitignore } from "../components/explorer-pages/Gitignore";
import { HKU } from "../components/explorer-pages/HKU";
import { Manulife } from "../components/explorer-pages/Manulife";
import { McGill } from "../components/explorer-pages/McGill";
import { PackageJson } from "../components/explorer-pages/PackageJson";
import { Pag } from "../components/explorer-pages/Pag";
import { Readme } from "../components/explorer-pages/Readme";
import { Serai } from "../components/explorer-pages/Serai";
import { ExtensionsContent } from "../containers/ExtensionsContent";
import { SearchContent } from "../containers/SearchContent";

export enum PagePaths {
  SERAI = "explorer/serai",
  PAG = "explorer/pag",
  MANULIFE = "explorer/manulife",
  ACURIS = "explorer/acuris",
  COLEMAN = "explorer/coleman",
  CATHAY = "explorer/cathay",
  MCGILL = "explorer/mcgill",
  HKU = "explorer/hku",
  BBYNORTH = "explorer/bbynorth",
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
];
