import React from "react";
import styled from "styled-components";
import { ResultFile } from "./ResultFile";

const ResultSummary = styled.div`
  padding: 14px 0;
  font-size: 13px;
  color: rgba(204, 204, 204, 0.65);
`;

const results = [
  { icon: "github", title: "GitHub" },
  { icon: "linkedin", title: "LinkedIn" },
  { icon: "medium", title: "Medium" },
  { icon: "CV", title: "Resume" },
];
export const SearchResult = () => {
  return (
    <div>
      <ResultSummary>4 results in 4 files</ResultSummary>
      {results.map((result) => (
        <ResultFile key={result.title} {...result} />
      ))}
    </div>
  );
};
