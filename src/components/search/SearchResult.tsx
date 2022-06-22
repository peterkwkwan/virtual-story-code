import React from "react";
import styled from "styled-components";

const ResultSummary = styled.div`
  padding: 14px 0;
  font-size: 13px;
  color: rgba(204, 204, 204, 0.65);
`;
export const SearchResult = () => {
  return (
    <div>
      <ResultSummary>4 results in 4 files</ResultSummary>
    </div>
  );
};
