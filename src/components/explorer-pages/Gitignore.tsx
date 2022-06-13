import React from "react";
import { useLastContributed } from "../../utils/useLastContributed";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { CommentGreen, LineBreak } from "./shared/StyledText";

export const Gitignore = () => {
  const date = new Date("2022-06-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 2 authors (Santa Claus and 1 other)`;

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={27}>
      node_modules
      <br />
      dist
      <LineBreak />
      <CommentGreen># food</CommentGreen>
      <br />
      durian
      <br />
      broad_beans
      <br />
      stinky_tofu
      <br />
      snail_noodles
    </ExplorerWrapper>
  );
};
