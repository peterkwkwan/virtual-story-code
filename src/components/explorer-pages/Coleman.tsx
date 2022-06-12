import React from "react";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { useLastContributed } from "../../utils/useLastContributed";

export const Coleman = () => {
  const date = new Date("2016-03-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 3 authors (Susana Tang and 2 others)`;

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={20}>
      Coleman
    </ExplorerWrapper>
  );
};
