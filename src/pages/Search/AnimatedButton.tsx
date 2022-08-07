import React from 'react'
import styled from 'styled-components'

const ButtonLink = styled.button`
  --background-color: ${(props) => props.theme.palette.dark02};
  --border-color: linear-gradient(to bottom right, #5d00ff, #ff2f00);
  --border-width: 0.5em;
  --edge-size: 0.5em;

  color: ${(props) => props.theme.palette.text04};
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  background: var(--background-color);
  padding: 0.6em 2em;
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
`

interface Props {
  title: string;
  hyperlink: string;
  handleIsHovering: (hovering: boolean) => void;
}
export const AnimatedButton = ({
  title,
  hyperlink,
  handleIsHovering,
}: Props) => {
  const handleClick = () => {
    window.open(hyperlink, '_blank')
  }

  return (
    <ButtonLink
      onMouseOver={() => handleIsHovering(true)}
      onMouseLeave={() => handleIsHovering(false)}
      onClick={handleClick}
    >
      {title}
    </ButtonLink>
  )
}
