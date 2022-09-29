import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import { LoadingButton } from './LoadingButton'
import { Footer } from './Footer'
import Logo from './Logo'

const Container = styled.div<{ showLoadingPage: boolean }>`
  position: absolute;
  top: 0;
  z-index: 2;
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
      z-index: -1;
      display: 'none'
    }
  }
`

const FadeInTypography = styled.p`
font-family: League Spartan;
text-align: center;
margin: 1rem;
font-size: 1.1rem;
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
  '"Googling stuff does not make you a doctor." Programmers: 😐',
  '9/10 dentists attribute their success to stack overflow',
  'creating technical debt is the fastest path to job security',
  'asking a backend developer to write CSS is the primary cause of global warming',
  'tip: instead of paying for hosting services, use the free one called localhost',
  "what is a jedi master's favorite git command? git push --force",
  '10 hours of debugging can save you 10 minutes of reading documentation',
  "becoming a software engineer increases your chances of being asked to fix your grandma's printer by 200%",
  'still trying to figure out who is json',
  '⚡⚡⚡UNLIMITED POWER!!!⚡⚡⚡',
  'Anakin Skywalker would have been granted a seat on the Jedi Council if he simply subscribed to AlgoExpert',
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
  'dev horror story #1: 3 billion+ devices still run java',
  'dev horror story #2: I was once asked to center a div',
  'dev horror story #3: git commit -m "fix: fixes"',
  'dev horror story #4: i once saw a stack overflow question with the only answer being: "nvm, figured it out" without providing a solution',
  'if pokemon were data types, charmander would evolve into stringmander'
]

interface Props {
  showLoadingPage: boolean
  onEnterClick: () => void
}
export const LoadingAnimation = ({showLoadingPage, onEnterClick}: Props) => {
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

  const handleMouseOverButton = () => {
    setIsHoveringButton(true)
  }
  const handleMouseLeaveButton = () => {
    setIsHoveringButton(false)
  }

  return (
    <Container showLoadingPage={showLoadingPage}>
      <Logo isHoveringButton={isHoveringButton}/>
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
              <Initializing key={delay} animationDelay={delay} >
              .
              </Initializing>
            )) 
            : (
              <AnimatedButton
                title="ENTER" 
                onClick={onEnterClick}
                onMouseOver={handleMouseOverButton}
                onMouseLeave={handleMouseLeaveButton}
              />
            )}
        </div>
      </div>
      <Footer/>
    </Container>
  )
}
