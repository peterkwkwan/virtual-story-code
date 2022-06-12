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
      "Mentored 3 new employees to the Relationship Management team.",
    ],
  };

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={20}>
      <JobDescriptionScss jobDescription={jobDescription} />
    </ExplorerWrapper>
  );
};
