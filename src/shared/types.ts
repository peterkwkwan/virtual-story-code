export enum FolderNames {
  NODE_MODULES = "node_modules",
  CAREER = "career",
  EDUCATION = "education",
}

export interface FolderContent {
  opened: boolean;
  files?: { title: string }[];
}
export type IFolderStructure = Record<FolderNames, FolderContent>;

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
