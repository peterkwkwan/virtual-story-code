import React, { useState } from 'react'
import styled from 'styled-components'

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
  animation: ${(props) => props.marioIsJumping && 'jump 1s linear alternate'};
`

const marioInitSrc = '/assets/icons/top-navbar/mario-standing.webp'
const marioJumpingSrc = '/assets/icons/top-navbar/mario-jumping.webp'

interface Props {
  handleMarioJump: () => void
  marioIsJumping: boolean
  marioKartIsRacing: boolean
}
export const RetroMario = ({
  handleMarioJump,
  marioIsJumping,
  marioKartIsRacing,
}: Props) => {
  const [marioSrc, setMarioSrc] = useState(marioInitSrc)

  const marioJump = () => {
    if (marioKartIsRacing) return
    if (!marioIsJumping) {
      setMarioSrc(marioJumpingSrc)
      handleMarioJump()
      setTimeout(() => {
        setMarioSrc(marioInitSrc)
      }, 1000)
    }
  }

  const handleClick = () => {
    marioJump()
  }

  return (
    <StyledMario
      src={marioSrc}
      marioIsJumping={marioIsJumping}
      alt="Mario"
      onClick={handleClick}
    />
  )
}
