import React from "react";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { useLastContributed } from "../../utils/useLastContributed";

export const Serai = () => {
  const date = new Date("2022-05-22");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 6 authors (Robert Dong and 5 others)`;

  return <ExplorerWrapper contributors={contributors}>Serai</ExplorerWrapper>;
};
