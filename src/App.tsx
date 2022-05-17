import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Content } from "./containers/Content";
import { SideNavigation } from "./containers/SideNavigation";
import { TopNavigation } from "./containers/TopNavigation";
import GlobalStyle from "./theme/globalStyles";
import { theme } from "./theme/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <TopNavigation />
        <div style={{ display: "flex", height: "calc(100vh - 28px)" }}>
          <SideNavigation />
          <Content />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
