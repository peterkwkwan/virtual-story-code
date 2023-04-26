import { useContext, useState } from 'react'
import styled from 'styled-components'

import { ExplorerContext } from '../../App'
import { ActionButtons } from './ActionButtons'
import { MarioKart } from './MarioKart'
import { RetroMario } from './RetroMario'
import { TopNavLink } from './TopNavLink'
import { StatusCenter } from './StatusCenter'

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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  li {
    font-weight: 400;
  }
  li:nth-of-type(2) {
    font-weight: 700;
  }
`
const StyledNavigation = styled.nav`
  position: relative;
  top: 0;
  left: 0;
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
        ? 'linear-gradient(90deg, rgba(249,255,0,1) 0%, rgba(100,197,255,1) 34%, #f18bc5 100%)'
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
  height: 31px;
  width: 56px;
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
          <li>
            <RetroMario
              handleMarioJump={handleMarioJump}
              marioIsJumping={marioIsJumping}
              marioKartIsRacing={marioKartIsRacing}
            />
          </li>
          {navOptions.map(({ name, path }) => (
            <li key={name} style={{ height: '100%', width: 'fit-content' }}>
              <TopNavLink name={name} gradient={gradient} path={path} />
            </li>
          ))}
        </StyledList>
        <StatusCenter gradient={gradient} />
      </Box>
      <Box>
        <ActionButtons
          marioKartIsRacing={marioKartIsRacing}
          handleActionClick={handleActionClick}
        />
        <MarioKart marioKartIsRacing={marioKartIsRacing} />
        <Title>{renderCurrentFile()} virtual-story-code</Title>

        <LoZLink
          style={{ cursor: 'pointer' }}
          alt="Link"
          src="/assets/icons/top-navbar/lozLink.webp"
          isBlackNWhite={isBlackNWhite}
          className="LozLink"
          onClick={handleLozClick}
        />
      </Box>
    </StyledNavigation>
  )
}

export { TopNavigation }
