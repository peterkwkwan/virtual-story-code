import React from "react";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { useLastContributed } from "../../utils/useLastContributed";
import { INonTechJobDescription } from "./shared/types";
import { JobDescriptionScss } from "./shared/JobDescriptionScss";

export const Coleman = () => {
  const date = new Date("2016-03-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 3 authors (Susana Tang and 2 others)`;

  const jobDescription: INonTechJobDescription = {
    role: "Operations Analyst",
    companyName: "Coleman Research",
    date: "March 2015 - March 2016",
    location: "Hong Kong",
    companyDescription:
      "Coleman Research is a leading expert-network research firm.",
    functions: [
      "Effectively manage relationships between experts and clients.",
      "Primary contact for C-level industry advisers and world's leading PE firms, hedge funds, and consultancies.",
      "Resolve member service issues both on expert and client levels.",
    ],
  };

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={21}>
      <JobDescriptionScss jobDescription={jobDescription} />
    </ExplorerWrapper>
  );
};
