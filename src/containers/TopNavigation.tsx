import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { MarioKart } from "../components/MarioKart";
import { RetroMario } from "../components/RetroMario";

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

enum Actions {
  CLOSE = "close",
  MINIMIZE = "minimize",
  EXPAND = "expand",
}

enum TrafficLightColors {
  RED = "#f55549",
  YELLOW = "#f5c11b",
  GREEN = "#51d66a",
}

const actionsBtns = [
  { name: Actions.CLOSE, btnColor: TrafficLightColors.RED },
  { name: Actions.MINIMIZE, btnColor: TrafficLightColors.YELLOW },
  { name: Actions.EXPAND, btnColor: TrafficLightColors.GREEN },
];

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

const StyledList = styled.ul`
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

const trafficLightAnimation = (actionType: Actions) => keyframes`
  0% {
    background-color: ${TrafficLightColors.RED};
  }
  33% {
    background-color: ${
      actionType === Actions.CLOSE ? TrafficLightColors.RED : "#1e1e1e"
    };
  }
  66% {
    background-color: ${
      actionType === Actions.MINIMIZE ? TrafficLightColors.YELLOW : "#1e1e1e"
    };
  }
  100% {
    background-color: ${
      actionType === Actions.EXPAND ? TrafficLightColors.GREEN : "#1e1e1e"
    };
  }

`;

const animationRule = (actionType: Actions) => {
  return css(
    ["", " 3s steps(1, start)"] as any as TemplateStringsArray,
    trafficLightAnimation(actionType)
  );
};

const StyledActionBtn = styled.span<{
  marioKartIsRacing: boolean;
  name: Actions;
  btnColor: string;
}>`
  content: ${(props) => props.name};
  width: 12px;
  height: 12px;
  margin: 0 4px;
  border-radius: 50%;
  z-index: 1;
  background-color: ${(props) => props.btnColor};
  animation: ${(props) => props.marioKartIsRacing && animationRule(props.name)};
`;

const ActionBtnContainer = styled.div`
  display: flex;
  span:after {
    color: #3b3b3b;
    position: relative;
  }

  &:hover {
    span:nth-of-type(1):after {
      content: "x";
      font-size: 11px;
      left: 3px;
      top: -4px;
    }
    span:nth-of-type(2):after {
      display: block;
      content: "";
      width: 8px;
      height: 2px;
      top: 5px;
      left: 2px;
      background-color: #5e5e5e;
    }
    span:nth-of-type(3):before {
      content: "";
      border-color: transparent transparent #5e5e5e transparent;
      border-style: solid;
      border-width: 0px 3px 3px;
      top: -7.5px;
      left: 1.5px;
      position: relative;
      display: inline-block;
      transform: rotate(0.9turn);
    }
    span:nth-of-type(3):after {
      content: "";
      border-color: transparent transparent #5e5e5e transparent;
      border-style: solid;
      border-width: 0px 3px 3px;
      top: -2.5px;
      left: -1.5px;
      position: relative;
      display: inline-block;
      transform: rotate(0.4turn);
    }
  }
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
        <StyledList>
          <ActionBtnContainer>
            {actionsBtns.map((btn) => (
              <StyledActionBtn
                key={btn.name}
                onClick={handleActionClick}
                marioKartIsRacing={marioKartIsRacing}
                name={btn.name}
                btnColor={btn.btnColor}
              />
            ))}
          </ActionBtnContainer>
        </StyledList>
        <MarioKart marioKartIsRacing={marioKartIsRacing} />
        <p style={{ position: "fixed", left: "50%", margin: 0 }}>
          virtual-story-code
        </p>
        <div>buttons</div>
      </Box>
    </StyledNavigation>
  );
};

export { TopNavigation };
