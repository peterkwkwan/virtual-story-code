import { useContext, useState } from 'react'
import styled from 'styled-components'

import { ExplorerContext } from '../../App'
import { ActionButtons } from './ActionButtons'
import { MarioKart } from './MarioKart'
import { RetroMario } from './RetroMario'
import { TopNavLink } from './TopNavLink'

import { PagePaths } from '@/pages/shared/routerConfig'
import { useBoundStore } from '@/hooks/useBoundStore'

const navOptions = [
  { name: 'Home', path: PagePaths.HOME },
  { name: 'Contact Me', path: PagePaths.SEARCH },
  { name: 'Blog', path: PagePaths.BLOG },
  { name: 'Skills', path: PagePaths.EXTENSIONS },
]

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  font-family: SF-Pro, sans-serif;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
`
const StyledNavigation = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  font-weight: 500;
  width: 100vw;
  height: 56px;
  font-size: 14px;
  font-family: sans-serif;
`

const Box = styled.div<{ gradient?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 28px;
  &:nth-of-type(1) {
    background: ${(props) =>
      props.gradient
        ? 'linear-gradient(90deg, rgba(249,255,0,1) 0%, rgba(100,197,255,1) 34%, rgba(226,0,0,1) 100%)'
        : 'linear-gradient( 90deg, rgba(0, 169, 203, 1) 0%, rgba(9, 9, 121, 1) 34%, rgba(2, 0, 36, 1) 100% )'};
  }
  &:nth-of-type(2n) {
    background: ${(props) => props.theme.palette.dark04};
    color: ${(props) => props.theme.palette.text01};
  }
`

const Title = styled.p`
  position: 'fixed';
  left: 50%;
  margin: 0;
  font-size: 12;
`

const LoZLink = styled.img<{ isBlackNWhite: boolean }>`
  position: relative;
  background: transparent;
  filter: ${(props) =>
    props.isBlackNWhite
      ? 'hue-rotate(300deg) contrast(200%) drop-shadow(-12px 0px 10px rgb(240, 13, 130))'
      : 'contrast(150%)'};
`

const TopNavigation = () => {
  const [gradient, setGradient] = useState(false)
  const [marioIsJumping, setMarioIsJumping] = useState(false)
  const [marioKartIsRacing, setMarioKartIsRacing] = useState(false)
  const [isBlackNWhite, setIsBlackNWhite] = useBoundStore((state) => [
    state.isBlackNWhite,
    state.setIsBlackNWhite,
  ])
  const { currentFile } = useContext(ExplorerContext)
  const [file] = currentFile
  const handleMarioJump = () => {
    if (!marioIsJumping) {
      setMarioIsJumping(true)
      setTimeout(() => {
        setGradient((prevState) => !prevState)
      }, 500)
      setTimeout(() => {
        setMarioIsJumping(false)
      }, 1000)
    }
  }

  const handleActionClick = () => {
    if (!marioKartIsRacing) {
      setMarioKartIsRacing(true)
      setTimeout(() => {
        setMarioKartIsRacing(false)
      }, 17000)
    }
  }

  const renderCurrentFile = () => {
    return file.title && `${file.title} —`
  }

  const handleLozClick = () => {
    setIsBlackNWhite()
  }

  return (
    <StyledNavigation>
      <Box gradient={gradient} className="TopNav">
        <StyledList>
          <RetroMario
            handleMarioJump={handleMarioJump}
            marioIsJumping={marioIsJumping}
            marioKartIsRacing={marioKartIsRacing}
          />
          {navOptions.map(({ name, path }) => (
            <TopNavLink
              key={name}
              name={name}
              gradient={gradient}
              path={path}
            />
          ))}
        </StyledList>
      </Box>
      <Box>
        <ActionButtons
          marioKartIsRacing={marioKartIsRacing}
          handleActionClick={handleActionClick}
        />
        <MarioKart marioKartIsRacing={marioKartIsRacing} />
        <Title>{renderCurrentFile()} virtual-story-code</Title>

        <LoZLink
          height="32"
          style={{ cursor: 'pointer' }}
          alt="Link"
          src="/assets/icons/top-navbar/lozLink.png"
          isBlackNWhite={isBlackNWhite}
          className="LozLink"
          onClick={handleLozClick}
        />
      </Box>
    </StyledNavigation>
  )
}

export { TopNavigation }
