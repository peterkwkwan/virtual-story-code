import { Acuris } from "../Explorer/Acuris";
import { BurnabyNorth } from "../Explorer/BurnabyNorth";
import { CathayDragon } from "../Explorer/CathayDragon";
import { Coleman } from "../Explorer/Coleman";
import { Gitignore } from "../Explorer/Gitignore";
import { HKU } from "../Explorer/HKU";
import { Manulife } from "../Explorer/Manulife";
import { McGill } from "../Explorer/McGill";
import { PackageJson } from "../Explorer/PackageJson";
import { Readme } from "../Explorer/Readme";
import { Serai } from "../Explorer/Serai";
import { Pag } from "../Explorer/Pag";
import { ExtensionsContent } from "../Extensions/ExtensionsContent";
import { SearchContent } from "../Search/SearchContent";

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
  PACKAGE_JSON = "explorer/package_json",
  GIT_IGNORE = "explorer/gitignore",
  README = "explorer/readme",
  SEARCH = "search",
  EXTENSIONS = "extensions",
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
