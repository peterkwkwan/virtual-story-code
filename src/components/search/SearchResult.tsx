import React from "react";
import styled from "styled-components";
import { ResultFile } from "./ResultFile";

const ResultSummary = styled.div`
  padding: 14px 0;
  font-size: 13px;
  color: rgba(204, 204, 204, 0.65);
`;

const Icon = styled.img`
  height: 0.75rem;
  width: 0.75rem;
`;

enum Results {
  GITHUB = "GitHub",
  LINKEDIN = "LinkedIn",
  MEDIUM = "Medium",
  RESUME = "Resume",
}

const getIconPath = (title: Results) => {
  return `../../../public/assets/icons/search/${title}.svg`;
};

const results = [
  {
    icon: <Icon src={getIconPath(Results.GITHUB)} />,
    title: Results.GITHUB,
  },
  {
    icon: <Icon src={getIconPath(Results.LINKEDIN)} />,
    title: Results.LINKEDIN,
  },
  {
    icon: <Icon src={getIconPath(Results.MEDIUM)} />,
    title: Results.MEDIUM,
  },
  {
    icon: <Icon src={getIconPath(Results.RESUME)} />,
    title: Results.RESUME,
  },
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
