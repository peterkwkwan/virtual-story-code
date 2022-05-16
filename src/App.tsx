import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/globalStyles";
import { theme } from "./theme/theme";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const handleClick = () => {
    inputRef?.current?.focus();
    if (inputRef.current) {
      inputRef.current.value = "lol";
    }
  };

  const Button = styled.button`
    color: ${(props) => props.theme.color.primary};
  `;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div>
          <input
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleClick}>Focus</Button>
          <p>prev name was this is a test: {prevName.current}</p>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
