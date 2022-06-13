import { Acuris } from "../components/explorer-pages/Acuris";
import { CathayDragon } from "../components/explorer-pages/CathayDragon";
import { Coleman } from "../components/explorer-pages/Coleman";
import { Gitignore } from "../components/explorer-pages/Gitignore";
import { Manulife } from "../components/explorer-pages/Manulife";
import { PackageJson } from "../components/explorer-pages/PackageJson";
import { Pag } from "../components/explorer-pages/Pag";
import { Readme } from "../components/explorer-pages/Readme";
import { Serai } from "../components/explorer-pages/Serai";

export enum PagePaths {
  SERAI = "explorer/serai",
  PAG = "explorer/pag",
  MANULIFE = "explorer/manulife",
  ACURIS = "explorer/acuris",
  COLEMAN = "explorer/coleman",
  CATHAY = "explorer/cathay",
  PACKAGE_JSON = 'explorer/package_json',
  GIT_IGNORE = 'explorer/gitignore',
  README = 'explorer/readme',
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
];
