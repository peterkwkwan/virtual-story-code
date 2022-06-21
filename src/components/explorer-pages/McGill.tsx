import React from "react";
import { useLastContributed } from "../../utils/useLastContributed";
import { EducationDescriptionHTML } from "./shared/EducationDescriptionHTML";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";

export const McGill = () => {
  const date = new Date("2014-05-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 3 authors (Mom & Dad and 1 other)`;

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={20}>
      <EducationDescriptionHTML />
    </ExplorerWrapper>
  );
};
