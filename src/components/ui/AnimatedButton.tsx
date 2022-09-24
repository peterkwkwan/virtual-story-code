import styled from 'styled-components'
import React from 'react'

const BtnSpan = styled.span`
  position: absolute;
  display: block;
`

const StyledButton = styled.button`
  --background-color: ${(props) => props.theme.palette.dark02};
  --span-color: #289BE9;
  --hover-color: #289BE9;
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
`
interface Props {
  title: string
}

export const AnimatedButton = ({title}: Props) => {
  return (
    <StyledButton>
      <BtnSpan></BtnSpan>
      <BtnSpan></BtnSpan>
      <BtnSpan></BtnSpan>
      <BtnSpan></BtnSpan>
      {title}    
    </StyledButton>
  )
}
