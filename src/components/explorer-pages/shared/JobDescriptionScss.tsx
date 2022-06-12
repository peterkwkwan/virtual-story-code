import React from "react";
import { YellowText } from "./StyledText";
import { INonTechJobDescription } from "./types";

export const JobDescriptionScss = ({
  jobDescription,
}: {
  jobDescription: INonTechJobDescription;
}) => {
  const {
    role,
    companyName,
    date,
    location,
    isCurrentRole,
    companyDescription,
    functions,
  } = jobDescription;

  return <YellowText>.{companyName}</YellowText>;
};
