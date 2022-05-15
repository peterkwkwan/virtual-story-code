import React, { useEffect, useRef, useState } from "react";
import GlobalStyle from "./theme/globalStyles";

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

  return (
    <>
      <GlobalStyle />

      <div>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick}>Focus</button>
        <p>prev name was this is a test: {prevName.current}</p>
      </div>
    </>
  );
}

export default App;
