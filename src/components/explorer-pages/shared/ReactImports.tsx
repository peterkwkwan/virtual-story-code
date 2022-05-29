import React from "react";
import styled from "styled-components";
import { ImportExportText, PropertyText, StringText } from "./StyledText";

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
  return (
    <>
      <StyledImport>
        <ImportExportText>import</ImportExportText>{" "}
        <PropertyText>React</PropertyText> from <StringText>'react'</StringText>
      </StyledImport>
    </>
  );
};
/* eslint-enable react/no-unescaped-entities */
