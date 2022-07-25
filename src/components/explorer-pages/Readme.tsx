import React from "react";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";
import { useLastContributed } from "../../hooks/useLastContributed";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { DarkBlueText, LineBreak } from "./shared/StyledText";

const BtnSpan = styled.span`
  position: absolute;
  display: block;
`;

const AnimatedButton = styled.button`
  --background-color: ${(props) => props.theme.palette.dark02};
  --span-color: #11fa05;
  --hover-color: #2196f3;
  color: ${(props) => props.theme.palette.text04};

  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  background: var(--background-color);
  padding: 0.6em 2em;
  border: 0;
  position: relative;
  isolation: isolate;
  display: inline-block;
  overflow: hidden;
  transition: 0.2s;
  color: var(--span-color);

  &:hover {
    color: #fff;
    background: var(--span-color);
    box-shadow: 0 0 10px var(--hover-color), 0 0 40px var(--hover-color),
      0 0 80px var(--hover-color);
    transition-delay: 1s;
  }

  ${BtnSpan}:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--span-color));
  }
  &:hover ${BtnSpan}:nth-child(1) {
    left: 100%;
    transition: 1s;
  }
  ${BtnSpan}:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--span-color));
  }
  &:hover ${BtnSpan}:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }
  ${BtnSpan}:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, var(--span-color));
  }
  &:hover ${BtnSpan}:nth-child(3) {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }
  ${BtnSpan}:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, var(--span-color));
  }
  &:hover ${BtnSpan}:nth-child(4) {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
`;

export const Readme = () => {
  const date = new Date("2019-05-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 2 authors (Mandy Shum and 1 other)`;

  const yearsOnly = diff.slice(0, 1);

  return (
    <>
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
        <AnimatedButton>
          <BtnSpan></BtnSpan>
          <BtnSpan></BtnSpan>
          <BtnSpan></BtnSpan>
          <BtnSpan></BtnSpan>
          Contact Me!
        </AnimatedButton>
      </ExplorerWrapper>
    </>
  );
};
