import React from 'react'
import styled from 'styled-components'

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
const LogoContainer = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 100px;
  margin-bottom: 0;
  overflow: hidden;
  ::after {
    border-bottom: 1px solid ${props => props.theme.palette.text01};
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

const StyledImg = styled.img`
    flex-grow: 1;
    object-fit: contain;
    padding-bottom: 16px;
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
interface Props {
  isSignedIn: boolean;
}

export const LoadingAnimation = () => {
  const animatedEllipsis = ['0s', '0.1s', '0.2s']

  const loginMessages = [
    'discovering new ways to make you wait',
    'kindly wait while I finish a cup of coffee',
    'currently busy taking the hobbits to isengard',
    'tip: reading loading screens tips make you 10% smarter',
    'warping you to the death star',
    "if javascript is so good, why isn't there javascript 2...?",
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
    'Only a scrum master deals in absolutes!',
    'Only a sith deploys on Fridays!',
    'hello there! . . . general kenobi!',
    "it's over, Anakin! I have LeetCode Premium!",
    'refresh this page for more terrible jokes / memes',
    'tell me where is Obi-Wan, for i much desire to speak with him',
    "i don't like vim. it's rough, coarse and I can't seem to exit",

  ]

  const generateRandomMessage = () => {
    const loginMessagesLength = loginMessages.length
    const index = Math.floor(Math.random() * loginMessagesLength)
    return loginMessages[index]
  }

  return (
    <Container>
      <LogoContainer>
        <AnimatedLogo>
          <StyledImg src="../../assets/images/VSCode.png" alt="Arkhia" height={100}/>
        </AnimatedLogo>
      </LogoContainer>
      <div style={{ marginBottom: 16}}>
        <FadeInTypography>{generateRandomMessage()}</FadeInTypography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {animatedEllipsis.map((delay) => (
            <Initializing key={delay} animationDelay={delay}>
              .
            </Initializing>
          ))}
        </div>
      </div>
    </Container>
  )
}
