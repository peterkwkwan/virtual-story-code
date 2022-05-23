import React from "react";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { useLastContributed } from "../../utils/useLastContributed";

export const Pag = () => {
  const date = new Date("2021-10-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 3 authors (Paul Chung and 3 others)`;

  return <ExplorerWrapper contributors={contributors}>Pag</ExplorerWrapper>;
};
