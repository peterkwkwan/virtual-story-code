import React from "react";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";

const StyledImport = styled.div`
  margin: 0;
  height: 18px;
  font-size: 14px;
  line-height: 18px;
  font-family: Menlo, Monaco, "Courier New", monospace;
  padding-bottom: 18px;
`;

/* eslint-disable react/no-unescaped-entities */
export const ReactImports = () => {
  const typewriterString = `<span style="color: #c586c0;">import</span> <span style="color: #9cdcfe;">React</span> <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'react'</span>`;
  return (
    <>
      <StyledImport>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter.typeString(typewriterString).pauseFor(2500).start();
          }}
        />
      </StyledImport>
    </>
  );
};
/* eslint-enable react/no-unescaped-entities */
