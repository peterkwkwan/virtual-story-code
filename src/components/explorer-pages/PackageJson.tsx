import React from "react";
import { useLastContributed } from "../../hooks/useLastContributed";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import {
  DarkBlueText,
  Indent,
  LightBlueText,
  LightYellowText,
  MutedGreenText,
  PurpleText,
  StringText,
  YellowBrackets,
} from "./shared/StyledText";

export const PackageJson = () => {
  const date = new Date("2022-06-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 2 authors (Mrs. Kwan and 1 other)`;

  Math.max(Infinity, 9999);
  /* eslint-disable react/no-unescaped-entities */

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={27}>
      <YellowBrackets>{"{"}</YellowBrackets>
      <Indent>
        <LightBlueText>"name"</LightBlueText>:{" "}
        <StringText>"virtual-story-code"</StringText>,
        <br />
        <LightBlueText>"version"</LightBlueText>:{" "}
        <StringText>"0.0.7"</StringText>,
        <br />
        <LightBlueText>"scripts"</LightBlueText>: <PurpleText>{"{"}</PurpleText>
        <Indent>
          <LightBlueText>"develop"</LightBlueText>:{" "}
          <StringText>"applications"</StringText>,
        </Indent>
        <Indent>
          <LightBlueText>"build"</LightBlueText>:{" "}
          <StringText>"career"</StringText>,
        </Indent>
        <Indent>
          <LightBlueText>"practice"</LightBlueText>:{" "}
          <StringText>"leetcode"</StringText>,
        </Indent>
        <Indent>
          <LightBlueText>"eat"</LightBlueText>:{" "}
          <StringText>"poutine"</StringText>,
        </Indent>
        <Indent>
          <LightBlueText>"play"</LightBlueText>:{" "}
          <StringText>"super smash"</StringText>,
        </Indent>
        <Indent>
          <LightBlueText>"watch"</LightBlueText>:{" "}
          <StringText>"star wars"</StringText>,
        </Indent>
        <Indent>
          <LightBlueText>"workout"</LightBlueText>:{" "}
          <StringText>"bench press"</StringText>,
        </Indent>
        <PurpleText>{"}"}</PurpleText>,
        <br />
        <LightBlueText>"dependencies"</LightBlueText>:{" "}
        <PurpleText>{"{"}</PurpleText>
        <Indent>
          <LightBlueText>"children"</LightBlueText>:{" "}
          <DarkBlueText>true</DarkBlueText>,
        </Indent>
        <Indent>
          <LightBlueText>"numberOfDogs"</LightBlueText>:{" "}
          <MutedGreenText>0</MutedGreenText>,
        </Indent>
        <Indent>
          <LightBlueText>"wife"</LightBlueText>:{" "}
          <DarkBlueText>true</DarkBlueText>,
        </Indent>
        <PurpleText>{"}"}</PurpleText>,
        <br />
        <LightBlueText>"devDependencies"</LightBlueText>:{" "}
        <PurpleText>{"{"}</PurpleText>
        <Indent>
          <LightBlueText>"@pc-master-race"</LightBlueText>:{" "}
          <StringText>"GTX 1070 Ti"</StringText>,
        </Indent>
        <Indent>
          <LightBlueText>"@nintendo"</LightBlueText>:{" "}
          <StringText>"switch"</StringText>,
        </Indent>
        <Indent>
          <LightBlueText>"bbt"</LightBlueText>:{" "}
          <DarkBlueText>true</DarkBlueText>,
        </Indent>
        <Indent>
          <LightBlueText>"career-satisfaction"</LightBlueText>:{" "}
          <DarkBlueText>true</DarkBlueText>,
        </Indent>
        <Indent>
          <LightBlueText>"happy-wife"</LightBlueText>:{" "}
          <StringText>"happy-life"</StringText>,
        </Indent>
        <Indent>
          <LightBlueText>"poutine"</LightBlueText>:{" "}
          <LightBlueText>Math</LightBlueText>.
          <LightYellowText>max</LightYellowText>
          <PurpleText>{"("}</PurpleText>
          <DarkBlueText>Infinity</DarkBlueText>, over *{" "}
          <MutedGreenText>9000</MutedGreenText>
          <PurpleText>{")"}</PurpleText>,
        </Indent>
        <PurpleText>{"}"}</PurpleText>,
      </Indent>
      <YellowBrackets>{"}"}</YellowBrackets>
    </ExplorerWrapper>
  );
};

/* eslint-enable react/no-unescaped-entities */
