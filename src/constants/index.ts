import { PagePaths } from "../shared/routerConfig";
import { IFolderStructure } from "../shared/types";

export enum Actions {
  CLOSE = "close",
  MINIMIZE = "minimize",
  EXPAND = "expand",
}

export enum TrafficLightColors {
  RED = "#f55549",
  YELLOW = "#f5c11b",
  GREEN = "#51d66a",
}

export enum SidebarOptions {
  EXPLORER = "Explorer",
  SEARCH = "Search",
  GIT = "Git",
  EXTENSIONS = "Extensions",
}

export enum FolderNames {
  NODE_MODULES = "node_modules",
  CAREER = "career",
  EDUCATION = "education",
}


export const initFolders: IFolderStructure = {
  [FolderNames.NODE_MODULES]: {
    opened: false,
  },
  [FolderNames.CAREER]: {
    opened: true,
    files: [
      { title: "Serai.tsx", path: PagePaths.SERAI },
      { title: "PAG.tsx", path: PagePaths.PAG},
      { title: "Manulife.tsx", path:PagePaths.MANULIFE },
      { title: "Acuris.scss", path: PagePaths.ACURIS },
      { title: "Coleman.scss", path: PagePaths.COLEMAN },
      { title: "CathayDragon.test", path: PagePaths.CATHAY },
    ],
  },
  [FolderNames.EDUCATION]: {
    opened: true,
    files: [
      { title: "McGill.html", path: PagePaths.MCGILL },
      { title: "HKU.html", path: PagePaths.HKU },
      { title: "BurnabyNorth.html", path: PagePaths.BBYNORTH },
    ],
  },
};