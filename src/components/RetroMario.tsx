import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface MarioProps {
  marioIsJumping: boolean;
}

const StyledMario = styled.img<MarioProps>`
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

const marioInitSrc = "../../public/assets/icons/mario-standing.png";
const marioJumpingSrc = "../../public/assets/icons/mario-jumping.png";

interface Props {
  handleMarioJump: () => void;
  marioIsJumping: boolean;
}
export const RetroMario = ({ handleMarioJump, marioIsJumping }: Props) => {
  const [marioSrc, setMarioSrc] = useState(marioInitSrc);

  const handleMouseEnter = () => {
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
