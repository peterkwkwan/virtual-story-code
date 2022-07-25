import React from "react";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { useLastContributed } from "../../hooks/useLastContributed";
import { JobDescriptionTsx } from "./shared/JobDescriptionTsx";
import { IJobDescription } from "./shared/types";

export const Serai = () => {
  const date = new Date("2022-05-22");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 6 authors (Robert Dong and 5 others)`;

  const jobDescription: IJobDescription = {
    role: "Software Engineer",
    isCurrentRole: true,
    companyName: "Serai",
    date: "October 2021 - Present",
    location: "Hong Kong",
    companyDescription:
      "Serai by HSBC is a B2B platform helping businesses simplify their supply chains.",
    functions: [
      "Worked in the Supply Chain Solutions (SCS) frontend team, developing features, code review and pair-programming",
      "Navigation revamp from top-navbar to sidebar, which improved responsiveness across viewports and UX",
      "Revamp the supply chain map filtering, solving major end user pain point of not being able to filter out irrelevant information",
      "Built components in Storybook to align with UX Design System",
    ],
    techStack: [
      "CRA",
      "Next.js",
      "TypeScript",
      "ArgoCD",
      "Material UI",
      "Figma",
      "styled-components",
      "Git",
      "SwaggerHub",
      "Storybook",
      "Jira",
      "SourceTree",
    ],
  };

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={46}>
      <JobDescriptionTsx jobDescription={jobDescription} />
    </ExplorerWrapper>
  );
};
