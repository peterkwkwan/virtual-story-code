import React from "react";
import { useLastContributed } from "../../utils/useLastContributed";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { JobDescriptionScss } from "./shared/JobDescriptionScss";
import { INonTechJobDescription } from "./shared/types";

export const Acuris = () => {
  const date = new Date("2019-05-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 12 authors (Elissa Hinson and 11 others)`;

  const jobDescription: INonTechJobDescription = {
    role: "Relationship Manager",
    companyName: "Acuris",
    date: "March 2016 - May 2019",
    location: "Hong Kong",
    companyDescription:
      "Acuris is a leading provider of global corporate financial news, intelligence and analysis to advisory firms, investments banks, law firms, hedge funds, private equity firms and corporations.",
    functions: [
      "Official training mentor for 3 new joiners in the Relationship Management team.",
      "Managed 50+ client relationships across investment banking, law firm & private equity sectors to ensure the client’s needs are met.",
      "Identify client motivations, enabling cross-selling plus up-selling opportunities.",
    ],
  };

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={22}>
      <JobDescriptionScss jobDescription={jobDescription} />
    </ExplorerWrapper>
  );
};
