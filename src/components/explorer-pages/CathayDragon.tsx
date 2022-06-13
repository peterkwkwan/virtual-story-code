import React from "react";
import TypewriterComponent from "typewriter-effect";
import { useLastContributed } from "../../utils/useLastContributed";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import {
  BlueText,
  DarkBlueText,
  GreenText,
  Indent,
  LightBlueText,
  LightYellowText,
  LineBreak,
  PurpleText,
  StringText,
  YellowBrackets,
  YellowText,
} from "./shared/StyledText";

export const CathayDragon = () => {
  const date = new Date("2012-08-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 4 authors (Anthony Yung and 3 others)`;

  /* eslint-disable react/no-unescaped-entities */

  const internshipString = `<span style="color: #c586c0;">import </span><span style="color: #9cdcfe;">Intern </span>
  <span style="color: #c586c0;">from </span><span style="color: #ce9178;">'swire-summer-internship'</span>`;
  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={20}>
      <PurpleText>import</PurpleText> <LightBlueText>assert</LightBlueText>{" "}
      <PurpleText>from</PurpleText> <StringText>'chai'</StringText>
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter.typeString(internshipString).pauseFor(2500).start();
        }}
      />
      <LineBreak />
      <LightYellowText>describe</LightYellowText>
      <YellowText>{"("}</YellowText>
      <StringText>'Cathay Dragon intern'</StringText>,{" "}
      <DarkBlueText>function</DarkBlueText>
      <PurpleText>{"() {"}</PurpleText>
      <Indent>
        <DarkBlueText>let </DarkBlueText>
        <BlueText>intern </BlueText>= <DarkBlueText>new </DarkBlueText>
        <GreenText>Intern</GreenText>
        <DarkBlueText>{"()"}</DarkBlueText>
        <LineBreak />
        <LightYellowText>it</LightYellowText>
        <DarkBlueText>{"("}</DarkBlueText>
        <StringText>'should draft iPhone storyboard.'</StringText>,
        <DarkBlueText> function </DarkBlueText>
        <YellowBrackets>{"() {"}</YellowBrackets>
        <Indent>
          <BlueText>assert</BlueText>.
          <LightYellowText>taskCompleted</LightYellowText>
          <PurpleText>{"("}</PurpleText>
          <LightBlueText>intern</LightBlueText>.
          <LightYellowText>draftStoryboard</LightYellowText>
          <BlueText>{"()"}</BlueText>, <DarkBlueText>true</DarkBlueText>
          <PurpleText>{")"}</PurpleText>;
        </Indent>
        <YellowBrackets>{")"}</YellowBrackets>
        <DarkBlueText>{"}"}</DarkBlueText>;
        <LineBreak />
        <LightYellowText>it</LightYellowText>
        <DarkBlueText>{"("}</DarkBlueText>
        <StringText>'should create new library catalog system.'</StringText>,
        <DarkBlueText> function </DarkBlueText>
        <YellowBrackets>{"() {"}</YellowBrackets>
        <Indent>
          <BlueText>assert</BlueText>.
          <LightYellowText>taskCompleted</LightYellowText>
          <PurpleText>{"("}</PurpleText>
          <LightBlueText>intern</LightBlueText>.
          <LightYellowText>createCatalog</LightYellowText>
          <BlueText>{"()"}</BlueText>, <DarkBlueText>true</DarkBlueText>
          <PurpleText>{")"}</PurpleText>;
        </Indent>
        <YellowBrackets>{")"}</YellowBrackets>
        <DarkBlueText>{"}"}</DarkBlueText>;
        <LineBreak />
        <LightYellowText>it</LightYellowText>
        <DarkBlueText>{"("}</DarkBlueText>
        <StringText>'should publish private Wikipedia page.'</StringText>,
        <DarkBlueText> function </DarkBlueText>
        <YellowBrackets>{"() {"}</YellowBrackets>
        <Indent>
          <BlueText>assert</BlueText>.
          <LightYellowText>taskCompleted</LightYellowText>
          <PurpleText>{"("}</PurpleText>
          <LightBlueText>intern</LightBlueText>.
          <LightYellowText>createInternalWiki</LightYellowText>
          <BlueText>{"()"}</BlueText>, <DarkBlueText>true</DarkBlueText>
          <PurpleText>{")"}</PurpleText>;
        </Indent>
        <YellowBrackets>{")"}</YellowBrackets>
        <DarkBlueText>{"}"}</DarkBlueText>;
        <LineBreak />
      </Indent>
      <PurpleText>{"}"}</PurpleText>
      <YellowText>{")"}</YellowText>;
    </ExplorerWrapper>
  );
};

/* eslint-enable react/no-unescaped-entities */
