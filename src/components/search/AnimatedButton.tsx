import React from "react";
import styled from "styled-components";

const BtnSpan = styled.span`
   {
    position: absolute;
    display: block;
  }
`;

const ButtonLink = styled.button`
  --background-color: ${(props) => props.theme.color.dark02};
  --border-color: linear-gradient(to bottom right, #5d00ff, #ff2f00);
  --border-width: 0.5em;
  --edge-size: 0.5em;
  --span-color: #11fa05;

  color: ${(props) => props.theme.color.text03};
  font-weight: 600;
  cursor: pointer;
  background: var(--background-color);
  padding: 0.5em 1.5em;
  border: 0;
  position: relative;
  isolation: isolate;
  display: inline-grid;
  place-content: center;
  clip-path: polygon(
    var(--edge-size) 0%,
    100% 0,
    100% calc(100% - var(--edge-size)),
    calc(100% - var(--edge-size)) 100%,
    0 100%,
    0% var(--edge-size)
  );
  transition: color 250ms;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--border-color);
    z-index: -2;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--background-color);
    z-index: -1;
    clip-path: polygon(
      var(--border-width) calc(var(--edge-size) + var(--border-width) * 0.5),
      calc(var(--edge-size) + var(--border-width) * 0.5) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width))
        calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      calc(var(--border-width)) calc(100% - var(--border-width))
    );
    transition: clip-path 500ms;
  }
  &:hover {
    color: white;
  }

  &:hover::after {
    clip-path: polygon(
      calc(100% - var(--border-width))
        calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      //bottom right - 1
      calc(100% - var(--border-width))
        calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width))
    );
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

interface Props {
  title: string;
}
export const AnimatedButton = ({ title }: Props) => {
  return (
    <ButtonLink>
      <BtnSpan></BtnSpan>
      <BtnSpan></BtnSpan>
      <BtnSpan></BtnSpan>
      <BtnSpan></BtnSpan>
      {title}
    </ButtonLink>
  );
};
