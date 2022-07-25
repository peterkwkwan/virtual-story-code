import React from "react";
import { Extension } from "./shared/types";

interface Props {
  extension: Extension;
}
export const ExtensionsButton = ({ extension }: Props) => {
  return <div>{extension.name}</div>;
};
