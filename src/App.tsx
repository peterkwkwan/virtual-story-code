import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { TopNavigation } from "./components/TopNavigation";
import GlobalStyle from "./theme/globalStyles";
import { theme } from "./theme/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <TopNavigation />
      </ThemeProvider>
    </>
  );
}

export default App;
