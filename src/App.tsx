import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Content } from "./containers/Content";
import { SideNavigation } from "./containers/SideNavigation";
import { TopNavigation } from "./containers/TopNavigation";
import { File } from "./shared/types";
import GlobalStyle from "./theme/globalStyles";
import { theme } from "./theme/theme";

interface ExplorerContextProp {
  currentFile: [File, React.Dispatch<React.SetStateAction<File>>];
}

const initFile: File = { title: "", url: "" };

export const ExplorerContext = React.createContext<ExplorerContextProp>({
  currentFile: [initFile, () => undefined],
});

function App() {
  const [file, setFile] = useState(initFile);

  return (
    <>
      <ExplorerContext.Provider value={{ currentFile: [file, setFile] }}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <TopNavigation />
          <div style={{ display: "flex", height: "calc(100vh - 56px)" }}>
            <SideNavigation />
            <Content />
          </div>
        </ThemeProvider>
      </ExplorerContext.Provider>
    </>
  );
}

export default App;
