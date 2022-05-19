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
  animation: ${(props) => props.marioIsJumping && "jump 1s linear alternate"};
`;

const marioInitSrc = "../../public/assets/icons/mario-standing.png";
const marioJumpingSrc = "../../public/assets/icons/mario-jumping.png";

interface Props {
  handleMarioJump: () => void;
}
export const RetroMario = ({ handleMarioJump }: Props) => {
  const [marioSrc, setMarioSrc] = useState(marioInitSrc);
  const [marioIsJumping, setMarioIsJumping] = useState(false);

  const handleMouseEnter = () => {
    setMarioSrc(marioJumpingSrc);
    setMarioIsJumping(true);
    handleMarioJump();
    setTimeout(() => {
      setMarioSrc(marioInitSrc);
      setMarioIsJumping(false);
    }, 1000);
  };

  return (
    <StyledMario
      src={marioSrc}
      onMouseOver={handleMouseEnter}
      marioIsJumping={marioIsJumping}
    />
  );
};
