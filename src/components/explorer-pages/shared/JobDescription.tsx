import React from "react";
import { DeclarationText, ImportExportText, VariableText } from "./StyledText";

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

  return (
    <div>
      <ImportExportText>export</ImportExportText>{" "}
      <DeclarationText>const</DeclarationText>{" "}
      <VariableText>{companyName}</VariableText> = (props)
    </div>
  );
};
