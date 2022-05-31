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
      { title: "Serai.tsx", path: "explorer/serai" },
      { title: "PAG.tsx", path: "explorer/pag" },
      { title: "Manulife.tsx", path: "explorer/manulife" },
      { title: "Acuris.scss", path: "explorer/acuris" },
      { title: "Coleman.scss", path: "explorer/coleman" },
      { title: "CathayDragon.test", path: "explorer/cathay" },
    ],
  },
  [FolderNames.EDUCATION]: {
    opened: true,
    files: [
      { title: "McGill.html", path: "explorer/mcgill" },
      { title: "HKU.html", path: "explorer/HKU" },
      { title: "BurnabyNorth.md", path: "explorer/bbynorth" },
    ],
  },
};