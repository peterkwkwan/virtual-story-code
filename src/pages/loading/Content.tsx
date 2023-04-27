import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { LoadingButton } from './LoadingButton'
import { Footer } from './Footer'
import Logo from './Logo'

const Container = styled.div<{ showLoadingPage: boolean }>`
  position: absolute;
  top: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0));
  display: flex;
  max-height: 100vh;
  height: 100vh;
  width: 100vw;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.white};
  animation: ${(props) => !props.showLoadingPage && 'switchPage 3s forwards'};
  -webkit-animation: ${(props) =>
    !props.showLoadingPage && 'switchPage 3s forwards'};
  @keyframes switchPage {
    10% {
      transform: scale(1, 0.005);
      opacity: 1;
    }
    50% {
      transform: scale(0.5, 0.002);
    }
    100% {
      transform: scale(0.2, 0.002);
      opacity: 0;
      display: 'none';
    }
  }
`

const ButtonContainer = styled.div`
  z-index: 5;
  margin: 16px 0;
`
const EllipsisContainer = styled.div`
  height: 46px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Initializing = styled.span<{ animationDelay: string }>`
  width: 4px;
  background: ${(props) => props.theme.palette.white};
  opacity: 0;
  font-size: 1.5em;
  display: inline;
  position: relative;
  height: 4px;
  margin: 0 4px;
  animation: dot 1.3s infinite;
  animation-delay: ${(props) => props.animationDelay};
  @keyframes dot {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

interface Props {
  showLoadingPage: boolean
  onEnterClick: () => void
}
export const Content = ({ showLoadingPage, onEnterClick }: Props) => {
  const [loading, setLoading] = useState(true)
  const [isHoveringButton, setIsHoveringButton] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, 4000)
    return () => clearTimeout(loadingTimer)
  }, [])

  const animatedEllipsis = ['0s', '0.1s', '0.2s']

  const handleMouseOverButton = () => {
    setIsHoveringButton(true)
  }
  const handleMouseLeaveButton = () => {
    setIsHoveringButton(false)
  }

  return (
    <Container showLoadingPage={showLoadingPage}>
      <Logo isHoveringButton={isHoveringButton} />
      <ButtonContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <EllipsisContainer>
            {loading ? (
              animatedEllipsis.map((delay) => (
                <Initializing key={delay} animationDelay={delay} />
              ))
            ) : (
              <LoadingButton
                title="ENTER"
                onClick={onEnterClick}
                onMouseOver={handleMouseOverButton}
                onMouseLeave={handleMouseLeaveButton}
              />
            )}
          </EllipsisContainer>
        </div>
      </ButtonContainer>
      <Footer />
    </Container>
  )
}
