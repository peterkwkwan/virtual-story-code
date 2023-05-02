import React, { useState } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import './styles/main.css'

import { Content } from './components/Content'
import { SideNavigation } from './components/side-navigation/SideNavigation'
import { TopNavigation } from './components/top-navigation/TopNavigation'
import { File } from './pages/explorer/shared/types'
import { PagePaths } from './pages/shared/routerConfig'
import GlobalStyle from './theme/globalStyles'
import { theme } from './theme/theme'
import { useBoundStore } from './hooks/useBoundStore'
import { Guidance } from './components/guidance'
import { useLocalStorage } from './hooks/useLocalStorage'
import { MobilePage } from './pages/mobile'

interface ExplorerContextProp {
  currentFile: [File, React.Dispatch<React.SetStateAction<File>>]
}

const initFile: File = { title: '', path: PagePaths.HOME }

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 0;
`
const MainContainer = styled(Container)`
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`

const MobileContainer = styled(Container)`
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`
const Body = styled.div`
  display: flex;
  height: calc(100vh - 56px);
  width: 100%;
  background-color: ${(props) => props.theme.palette.dark01};
`

export const ExplorerContext = React.createContext<ExplorerContextProp>({
  currentFile: [initFile, () => undefined],
})

function App() {
  const [file, setFile] = useState(initFile)
  const isBlackNWhite = useBoundStore((state) => state.isBlackNWhite)
  const showLoadingPage = useBoundStore((state) => state.showLoadingPage)
  const [showGuidance, setShowGuidance] = useLocalStorage<boolean>(
    'guidance',
    true
  )

  const handleCloseGuidance = () => {
    setShowGuidance(false)
  }

  return (
    <BrowserRouter>
      <ExplorerContext.Provider value={{ currentFile: [file, setFile] }}>
        <GlobalStyle isBlackNWhite={isBlackNWhite} />
        <ThemeProvider theme={theme}>
          {showGuidance && !showLoadingPage && (
            <Guidance handleCloseGuidance={handleCloseGuidance} />
          )}
          <MainContainer>
            <TopNavigation />
            <Body>
              <SideNavigation />
              <Content />
            </Body>
          </MainContainer>
          <MobileContainer>
            <MobilePage />
          </MobileContainer>
        </ThemeProvider>
      </ExplorerContext.Provider>
    </BrowserRouter>
  )
}

export default App
