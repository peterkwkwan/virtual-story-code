import React from "react";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { useLastContributed } from "../../utils/useLastContributed";
import { IJobDescription, JobDescription } from "./shared/JobDescription";

export const Pag = () => {
  const date = new Date("2021-10-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 3 authors (Paul Chung and 3 others)`;

  const jobDescription: IJobDescription = {
    role: "Frontend Developer",
    companyName: "PAG",
    date: "May 2020 - October 2021",
    location: "Hong Kong",
    companyDescription:
      "PAG is one of Asia’s leading investment firms, managing more than US$35 billion in capital across strategies including private equity, real estate and absolute returns.",
    functions: [
      "Identified inefficient workflows in HR / PE teams; built React apps to avoid human errors and streamline processes",
      "Refactored a single-file C# 4000+ line vendor app into a scalable format. Resolved 10+ legacy bugs and increased performance by 95%, resulting in efficient extendibility",
    ],
    techStack: [
      "SPFx",
      "React",
      "TypeScript",
      "PostgreSQL",
      "pgAdmin4",
      "Bitbucket",
      "Git",
      "Material UI",
      "Jira",
      "SourceTree",
    ],
  };

  return (
    <ExplorerWrapper contributors={contributors}>
      <JobDescription jobDescription={jobDescription} />
    </ExplorerWrapper>
  );
};
