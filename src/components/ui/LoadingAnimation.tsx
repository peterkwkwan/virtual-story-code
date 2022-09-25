import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import { AnimatedButton } from './AnimatedButton'
import Logo from './Logo'

const Container = styled.div`
  background-color: #1e1e1e;
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.text01};
`
const LogoContainer = styled.div<{isHoveringButton: boolean}>`
  position: relative;
  display: flex;
  width: 400px;
  height: 100px;
  margin-bottom: 0;
  overflow: hidden;
  ::after {
    border-bottom: ${(props) => (props.isHoveringButton ? '4px solid #289BE9' : `2px solid ${props.theme.palette.text01}`)};
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0%;
    content: "";
    transition: all 1s ease;
    animation: growBorder 1s ease;
    animation-fill-mode: forwards;
  }
  @keyframes growBorder {
    0% {
      width: 0%;
      margin-left: 0%;
    }
    100% {
      width: 100%;
      margin-left: -50%;
    }
  }
`



const AnimatedLogo = styled.div`
  animation: elevate 1s ease;
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  @keyframes elevate {
    0% {
      transform: translateY(100px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`

const FadeInTypography = styled.p`
  animation: fadeIn 1s linear;
  @keyframes fadeIn {
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
const Initializing = styled.span<{ animationDelay: string }>`
  opacity: 0;
  font-size: 1.5em;
  display: inline;
  position: relative;
  height: 46.5px;
  line-height: 8px;
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
  } ;
`

const loadingTips = [
  'discovering new ways to make you wait',
  'kindly wait while I finish a cup of coffee',
  'busy taking the hobbits to isengard',
  'tip: reading loading screens tips make you 10% smarter',
  'warping you to the death star',
  "if javascript is so good, why isn't there javascript 2 . . . ?",
  'did you know? learning java is the leading cause of depression in Canada',
  'tip: for faster PR reviews, shrink your commits by writing all your code on one line',
  'if every developer wrote good documentation, there would be world peace',
  '9/10 professional NBA players attribute their success to stack overflow',
  'asking a backend developer to write CSS is the primary cause of global warming',
  'tip: instead of paying for hosting services, use the free one called localhost',
  "what is a jedi master's favorite git command? git push --force",
  '10 hours of debugging can save you 10 minutes of reading documentation',
  "becoming a software engineer increases your chances of being asked to fix your grandma's printer by 200%",
  'still trying to find out who is json',
  'UNLIMITED POWER!!!',
  'Anakin Skywalker would have been granted a seat on the Jedi Council if he simply subscribed to Algoexpert',
  'flexing the boxes',
  'this is where the fun begins',
  'studies have shown that programming on the high ground results in 25% fewer merge conflicts',
  'only a scrum master deals in absolutes!',
  'only a sith deploys on fridays!',
  'hello there! . . . general kenobi!',
  "it's over, Anakin! I have LeetCode Premium!",
  'refresh this page for more terrible jokes / memes',
  'tell me where is Obi-Wan, for i much desire to speak with him',
  "i don't like vim. it's rough, coarse and I can't seem to exit",

]

interface Props {
  isSignedIn: boolean;
}

export const LoadingAnimation = () => {
  const [loading, setLoading] = useState(true)
  const [isHoveringButton, setIsHoveringButton] = useState(false)
    
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, 4000)
    return () => clearTimeout(loadingTimer)
  }, [])

  const animatedEllipsis = ['0s', '0.1s', '0.2s']

  const message = useMemo(() => {
    const loadingTipsLength = loadingTips.length
    const index = Math.floor(Math.random() * loadingTipsLength)
    return loadingTips[index]
  }, [])


  const handleMouseEnterButton = () => {
    setIsHoveringButton(true)
  }
  const handleMouseLeaveButton = () => {
    setIsHoveringButton(false)
  }

  return (
    <Container>
      <LogoContainer isHoveringButton={isHoveringButton}>
        <AnimatedLogo>
          <Logo/>
        </AnimatedLogo>
      </LogoContainer>
      <div style={{ marginBottom: 16}}>
        <FadeInTypography>{message}</FadeInTypography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {loading ?
            animatedEllipsis.map((delay) => (
              <Initializing key={delay} animationDelay={delay}>
              .
              </Initializing>
            )) 
            :
            <AnimatedButton title="ENTER" onMouseEnter={handleMouseEnterButton} onMouseLeave={handleMouseLeaveButton}/>}

        </div>
      </div>
    </Container>
  )
}
