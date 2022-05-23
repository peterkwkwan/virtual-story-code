import { FolderNames } from "../constants";

export interface File {
  title: string;
  path: string;
}
export interface FolderContent {
  opened: boolean;
  files?: File[];
}
export type IFolderStructure = Record<FolderNames, FolderContent>;
