import React from "react";
import TypewriterComponent from "typewriter-effect";
import { useLastContributed } from "../../utils/useLastContributed";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { DarkBlueText, LineBreak } from "./shared/StyledText";

export const Readme = () => {
  const date = new Date("2019-05-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 2 authors (Santa Claus and 1 other)`;

  const yearsOnly = diff.slice(0, 1);

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={27}>
      <DarkBlueText>## virtual story code</DarkBlueText>
      <LineBreak />

      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter
            .changeDelay(35)
            .typeString(
              'Hello! My name is <span style="color: #4ec9b0;"><strong>Peter Kwan</strong></span>.<br/><br/>'
            )
            .pauseFor(400)
            .typeString(
              'This is my <span style="color: #c586c0;">Virtual Story Code</span> (a.k.a. personal website).<br/><br/>'
            )
            .pauseFor(400)
            .typeString(
              `Inspired by Microsoft's <span style="color: #569cd6;">Visual Studio Code</span>, I created this project to showcase my creativity and portfolio.<br/><br/>`
            )
            .pauseFor(400)
            .typeString(
              `I'm a self-taught developer, with over ${yearsOnly} years of experience in frontend development.<br/><br/>`
            )
            .pauseFor(400)
            .typeString(
              `I hope this inspires you to create something <span style="color: #ffd700;">AWESOME</span> today!`
            )
            .start();
        }}
      />
    </ExplorerWrapper>
  );
};
