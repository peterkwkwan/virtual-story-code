import { Acuris } from "../components/explorer-pages/Acuris";
import { Manulife } from "../components/explorer-pages/Manulife";
import { Pag } from "../components/explorer-pages/Pag";
import { Serai } from "../components/explorer-pages/Serai";

enum PagePaths {
  SERAI = "explorer/serai",
  PAG = "explorer/pag",
  MANULIFE = "explorer/manulife",
  ACURIS = "explorer/acuris",
  COLEMAN = "explorer/coleman",
  CATHAY = "explorer/cathay",
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
    component: Acuris,
  },
  {
    path: PagePaths.CATHAY,
    component: Acuris,
  },
];
