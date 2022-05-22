import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Content } from "./containers/Content";
import { SideNavigation } from "./containers/SideNavigation";
import { TopNavigation } from "./containers/TopNavigation";
import GlobalStyle from "./theme/globalStyles";
import { theme } from "./theme/theme";

interface ExplorerContextProp {
  currentFile: [string, React.Dispatch<React.SetStateAction<string>>];
}

export const ExplorerContext = React.createContext<ExplorerContextProp>({
  currentFile: ["", () => undefined],
});

function App() {
  const [file, setFile] = useState("");

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
