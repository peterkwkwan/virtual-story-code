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
