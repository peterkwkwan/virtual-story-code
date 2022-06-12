import React from "react";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { useLastContributed } from "../../utils/useLastContributed";
import { IJobDescription, JobDescriptionTsx } from "./shared/JobDescriptionTsx";

export const Manulife = () => {
  const date = new Date("2020-05-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 3 authors (Albert Ahg and 2 others)`;

  const jobDescription: IJobDescription = {
    role: "Frontend Developer",
    companyName: "Manulife",
    date: "August 2019 - May 2020",
    location: "Hong Kong",
    companyDescription:
      "Manulife is a multinational insurance company headquartered in Toronto, Canada.",
    functions: [
      "Spearheaded the Hong Kong CWS (Customer Web Site) revamp",
      "Worked closely with the UI/UX team to gather requirements and implement features",
      "Consumed RESTful api for displaying insurance products in frontend page",
    ],
    techStack: [
      "Angular 8",
      "Sass",
      "Material Angular",
      "Bootstrap 4",
      "Jenkins",
    ],
  };
  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={31}>
      <JobDescriptionTsx jobDescription={jobDescription} />
    </ExplorerWrapper>
  );
};
