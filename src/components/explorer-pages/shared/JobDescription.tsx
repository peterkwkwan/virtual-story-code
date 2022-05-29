import React from "react";

export interface IJobDescription {
  role: string;
  isCurrentRole?: boolean;
  companyName: string;
  date: string;
  location: string;
  companyDescription: string;
  functions: string[];
  techStack: string[];
}

export const JobDescription = ({
  jobDescription,
}: {
  jobDescription: IJobDescription;
}) => {
  const {
    role,
    companyName,
    date,
    location,
    companyDescription,
    functions,
    techStack,
  } = jobDescription;

  return <div>export const {companyName}</div>;
};
