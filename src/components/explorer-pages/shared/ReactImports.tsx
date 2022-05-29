import React from "react";
import styled from "styled-components";

const StyledImport = styled.div`
  margin: 0;
  height: 18px;
  font-size: 14px;
  line-height: 18px;
  font-family: Menlo, Monaco, "Courier New", monospace;
  padding-bottom: 18px;
`;

const Import = styled.span`
  color: ${(props) => props.theme.color.importExportText};
`;

const ImportName = styled.span`
  color: ${(props) => props.theme.color.propertyText};
`;

const PathName = styled.span`
  color: ${(props) => props.theme.color.stringText};
`;

/* eslint-disable react/no-unescaped-entities */
export const ReactImports = () => {
  return (
    <>
      <StyledImport>
        <Import>import</Import> <ImportName>React</ImportName> from{" "}
        <PathName>'react'</PathName>
      </StyledImport>
    </>
  );
};
/* eslint-enable react/no-unescaped-entities */
