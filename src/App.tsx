import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Content } from "./containers/Content";
import { SideNavigation } from "./containers/SideNavigation";
import { TopNavigation } from "./containers/TopNavigation";
import { PagePaths } from "./shared/routerConfig";
import { File } from "./shared/types";
import GlobalStyle from "./theme/globalStyles";
import { theme } from "./theme/theme";

interface ExplorerContextProp {
  currentFile: [File, React.Dispatch<React.SetStateAction<File>>];
}

const initFile: File = { title: "README.md", path: PagePaths.README };

const StyledDiv = styled.div`
  display: flex;
  height: calc(100vh - 56px);
  background-color: #1e1e1e;
`;

export const ExplorerContext = React.createContext<ExplorerContextProp>({
  currentFile: [initFile, () => undefined],
});

function App() {
  const [file, setFile] = useState(initFile);

  return (
    <BrowserRouter>
      <ExplorerContext.Provider value={{ currentFile: [file, setFile] }}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <TopNavigation />
          <StyledDiv>
            <SideNavigation />
            <Content />
          </StyledDiv>
        </ThemeProvider>
      </ExplorerContext.Provider>
    </BrowserRouter>
  );
}

export default App;
