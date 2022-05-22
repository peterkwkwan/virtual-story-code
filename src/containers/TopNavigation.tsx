import React, { useContext, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ExplorerContext } from "../App";
import { ActionButtons } from "../components/ActionButtons";
import { MarioKart } from "../components/MarioKart";
import { RetroMario } from "../components/RetroMario";
import { Actions, TrafficLightColors } from "../shared/types";

const navOptions = [
  { name: "Code" },
  { name: "File" },
  { name: "Edit" },
  { name: "Selection" },
  { name: "View" },
  { name: "Go" },
  { name: "Run" },
  { name: "Terminal" },
  { name: "Window" },
  { name: "Help" },
];

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-right: 16px;
    align-self: center;
    :nth-of-type(1) {
      font-weight: 600;
    }
  }
`;
const StyledNavigation = styled.div`
  position: relative;
  top: 0;
  left: 0;
  font-weight: 500;
  width: 100vw;
  height: 56px;
  font-size: 14px;
  font-family: sans-serif;
`;

const Box = styled.div<{ gradient?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 28px;
  &:nth-of-type(1) {
    background: ${(props) =>
      props.gradient
        ? "linear-gradient(90deg, rgba(249,255,0,1) 0%, rgba(100,197,255,1) 34%, rgba(226,0,0,1) 100%)"
        : "linear-gradient( 90deg, rgba(0, 169, 203, 1) 0%, rgba(9, 9, 121, 1) 34%, rgba(2, 0, 36, 1) 100% )"};
    color: ${(props) =>
      props.gradient ? props.theme.color.dark01 : props.theme.color.text01};
  }
  &:nth-of-type(2n) {
    background: ${(props) => props.theme.color.dark04};
    color: ${(props) => props.theme.color.text01};
  }
`;

const TopNavigation = () => {
  const [gradient, setGradient] = useState(false);
  const [marioIsJumping, setMarioIsJumping] = useState(false);
  const [marioKartIsRacing, setMarioKartIsRacing] = useState(false);
  const { currentFile } = useContext(ExplorerContext);
  const [file] = currentFile;
  const handleMarioJump = () => {
    if (!marioIsJumping) {
      setMarioIsJumping(true);
      setTimeout(() => {
        setGradient((prevState) => !prevState);
      }, 500);
      setTimeout(() => {
        setMarioIsJumping(false);
      }, 1000);
    }
  };

  const handleActionClick = () => {
    setMarioKartIsRacing(true);
    setTimeout(() => {
      setMarioKartIsRacing(false);
    }, 17000);
  };

  const renderCurrentFile = () => {
    return file && `${file} —`;
  };

  return (
    <StyledNavigation>
      <Box gradient={gradient}>
        <StyledList>
          <RetroMario
            handleMarioJump={handleMarioJump}
            marioIsJumping={marioIsJumping}
            marioKartIsRacing={marioKartIsRacing}
          />
          {navOptions.map((option) => (
            <li key={option.name}>{option.name}</li>
          ))}
        </StyledList>
      </Box>
      <Box>
        <ActionButtons
          marioKartIsRacing={marioKartIsRacing}
          handleActionClick={handleActionClick}
        />
        <MarioKart marioKartIsRacing={marioKartIsRacing} />
        <p style={{ position: "fixed", left: "50%", margin: 0 }}>
          {renderCurrentFile()} virtual-story-code
        </p>
        <img height="32" src="../../public/assets/icons/link.png" />
      </Box>
    </StyledNavigation>
  );
};

export { TopNavigation };
