import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
const actionsBtns = [
  { name: Actions.CLOSE },
  { name: Actions.MINIMIZE },
  { name: Actions.EXPAND },
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

const StyledActionBtn = styled.span`
  content: "";
  width: 12px;
  height: 12px;
  margin: 0 4px;
  border-radius: 50%;
  &:nth-of-type(1) {
    margin-left: 8px;
    background-color: #f55549;
  }
  &:nth-of-type(2) {
    background-color: #f5c11b;
  }
  &:nth-of-type(3) {
    background-color: #51d66a;
  }
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
      font-weight: 300;
      left: 3px;
      top: -4.5px;
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

  const handleActionClick = (action: string) => {
    if (action === Actions.CLOSE) {
      window.close();
      if (
        window.confirm(
          'Originally, this button was intended to close the current browser tab (my portfolio website). Unfortunately, I cannot close the tab as browsers have a security feature to prevent this from happening with Javascript. If you click "OK" you would be redirected to the Stack Overflow page explaining this security enhancement.'
        )
      ) {
        window.location.href =
          "https://stackoverflow.com/questions/25937212/window-close-doesnt-work-scripts-may-close-only-the-windows-that-were-opene";
      }
    }
  };

  return (
    <StyledNavigation>
      <Box gradient={gradient}>
        <StyledList>
          <RetroMario
            handleMarioJump={handleMarioJump}
            marioIsJumping={marioIsJumping}
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
                onClick={() => handleActionClick(btn.name)}
              />
            ))}
          </ActionBtnContainer>
        </StyledList>
        <p style={{ position: "fixed", left: "50%", margin: 0 }}>
          virtual-story-code
        </p>
        <div>buttons</div>
      </Box>
    </StyledNavigation>
  );
};

export { TopNavigation };
