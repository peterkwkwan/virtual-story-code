import React from "react";
import { ReactImports } from "./ReactImports";
import {
  DeclarationText,
  ImportExportText,
  Indent,
  LineBreak,
  ObjectText,
  PropertyText,
  StringText,
  TypeText,
  VariableText,
  YellowBrackets,
} from "./StyledText";

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
    isCurrentRole,
    companyDescription,
    functions,
    techStack,
  } = jobDescription;
  /* eslint-disable react/no-unescaped-entities */
  return (
    <>
      <ReactImports />
      <div>
        <ImportExportText>export</ImportExportText>{" "}
        <DeclarationText>const</DeclarationText>{" "}
        <VariableText>{companyName}</VariableText> ={" "}
        <YellowBrackets>{"() "}</YellowBrackets>
        {"=> "} <YellowBrackets>{"{"}</YellowBrackets>
        {isCurrentRole && (
          <Indent>
            <DeclarationText>const</DeclarationText>{" "}
            <ImportExportText>{"["}</ImportExportText>
            <ObjectText>isCurrentRole</ObjectText>
            <ImportExportText>{"]"}</ImportExportText> ={" "}
            <TypeText>React</TypeText>.<VariableText>useState</VariableText>
            <ImportExportText>{"("}</ImportExportText>
            <ObjectText>true</ObjectText>
            <ImportExportText>{")"}</ImportExportText>
          </Indent>
        )}
        <LineBreak />
        <Indent>
          <DeclarationText>const</DeclarationText>{" "}
          <ObjectText>companyName</ObjectText> ={" "}
          <StringText>"{companyName}"</StringText>
        </Indent>
        <Indent>
          <DeclarationText>const</DeclarationText> <ObjectText>date</ObjectText>{" "}
          = <StringText>"{date}"</StringText>
        </Indent>
        <Indent>
          <DeclarationText>const</DeclarationText> <ObjectText>role</ObjectText>{" "}
          = <StringText>"{role}"</StringText>
        </Indent>
        <Indent>
          <DeclarationText>const</DeclarationText>{" "}
          <ObjectText>location</ObjectText> ={" "}
          <StringText>"{location}"</StringText>
        </Indent>
        <LineBreak />
        <Indent>
          <DeclarationText>const</DeclarationText>{" "}
          <ObjectText>companyDescription</ObjectText> ={" "}
          <StringText>"{companyDescription}"</StringText>
        </Indent>
        {functions.map((task, idx) => {
          return (
            <React.Fragment key={task}>
              <LineBreak />
              <Indent>
                <DeclarationText>const</DeclarationText>{" "}
                <VariableText>project{idx + 1}</VariableText> ={" "}
                <DeclarationText>function</DeclarationText>{" "}
                <ImportExportText>{"() {"} </ImportExportText>
                <Indent>
                  <PropertyText>console</PropertyText>.
                  <VariableText>log</VariableText>
                  <DeclarationText>{"("}</DeclarationText>
                  <StringText>"{task}"</StringText>
                  <DeclarationText>{")"}</DeclarationText>
                </Indent>
                <ImportExportText>{"}"} </ImportExportText>
              </Indent>
            </React.Fragment>
          );
        })}
        <LineBreak />
        <Indent>
          <>
            <DeclarationText>const</DeclarationText>{" "}
            <ObjectText>techStack</ObjectText> ={" "}
            <ImportExportText>{"["} </ImportExportText>
            <Indent>
              {techStack.map((stack) => {
                return (
                  <div key={stack}>
                    <StringText>"{stack}",</StringText>
                  </div>
                );
              })}
            </Indent>
            <ImportExportText>{"]"} </ImportExportText>
          </>
        </Indent>
        <YellowBrackets>{"}"}</YellowBrackets>
      </div>
    </>
  );
};
/* eslint-enable react/no-unescaped-entities */
