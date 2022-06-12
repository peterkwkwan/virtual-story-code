import React from "react";
import { useLastContributed } from "../../utils/useLastContributed";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";

export const Acuris = () => {
  const date = new Date("2019-05-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 12 authors (Elissa Hinson and 11 others)`;

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={20}>
      Acuris
    </ExplorerWrapper>
  );
};
