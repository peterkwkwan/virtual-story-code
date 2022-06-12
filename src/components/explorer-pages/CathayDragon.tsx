import React from "react";
import { useLastContributed } from "../../utils/useLastContributed";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";

export const CathayDragon = () => {
  const date = new Date("2012-08-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 4 authors (Anthony Yung and 3 others)`;

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={20}>
      CathayDragon
    </ExplorerWrapper>
  );
};
