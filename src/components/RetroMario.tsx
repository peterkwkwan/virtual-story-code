import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledMario = styled.img<{ marioIsJumping: boolean }>`
  @keyframes jump {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  width: 16px;
  height: 16px;
  margin: 0 16px;
  cursor: pointer;
  animation: ${(props) => props.marioIsJumping && "jump 1s linear alternate"};
`;

const marioInitSrc = "../../assets/icons/mario-standing.png";
const marioJumpingSrc = "../../assets/icons/mario-jumping.png";

interface Props {
  handleMarioJump: () => void;
  marioIsJumping: boolean;
  marioKartIsRacing: boolean;
}
export const RetroMario = ({
  handleMarioJump,
  marioIsJumping,
  marioKartIsRacing,
}: Props) => {
  const [marioSrc, setMarioSrc] = useState(marioInitSrc);

  const handleMouseEnter = () => {
    if (marioKartIsRacing) return;
    if (!marioIsJumping) {
      setMarioSrc(marioJumpingSrc);
      handleMarioJump();
      setTimeout(() => {
        setMarioSrc(marioInitSrc);
      }, 1000);
    }
  };

  const handleClick = () => {
    window.open("https://supermario-game.com/", "_blank");
  };

  return (
    <StyledMario
      src={marioSrc}
      onMouseOver={handleMouseEnter}
      onClick={handleClick}
      marioIsJumping={marioIsJumping}
    />
  );
};
