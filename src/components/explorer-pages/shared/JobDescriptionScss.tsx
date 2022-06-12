import React from "react";
import {
  LightBlueText,
  LineBreak,
  StringText,
  YellowText,
  Indent,
  PurpleText,
  MutedGreenText,
  DarkBlueText,
} from "./StyledText";
import { INonTechJobDescription } from "./types";

export const JobDescriptionScss = ({
  jobDescription,
}: {
  jobDescription: INonTechJobDescription;
}) => {
  const { role, companyName, date, location, companyDescription, functions } =
    jobDescription;

  const basicInfo: Partial<INonTechJobDescription> = {
    companyName: companyName,
    date: date,
    role: role,
    location: location,
    companyDescription: companyDescription,
  };

  /* eslint-disable react/no-unescaped-entities */

  const renderBasicInfo = () => {
    const elementList: JSX.Element[] = [];
    for (const property in basicInfo) {
      elementList.push(
        <Indent>
          <LightBlueText>{property}</LightBlueText>:{" "}
          <StringText>
            "{basicInfo[property as keyof Partial<INonTechJobDescription>]}"
          </StringText>
          ;
        </Indent>
      );
    }
    return elementList;
  };

  const renderJobFunctions = () => {
    const elementList: JSX.Element[] = [];
    functions.map((item, idx) => {
      elementList.push(
        <Indent>
          <YellowText>li:nth-child</YellowText>
          <DarkBlueText>{"("}</DarkBlueText>
          <MutedGreenText>{idx + 1}</MutedGreenText>
          <DarkBlueText>{")"}</DarkBlueText> <DarkBlueText>{"{"}</DarkBlueText>
          <Indent>
            <LightBlueText>task</LightBlueText>:
            <StringText>"{item}"</StringText>;
          </Indent>
          <DarkBlueText>{"}"}</DarkBlueText>
        </Indent>
      );
    });
    return elementList;
  };

  return (
    <>
      <YellowText>
        .{companyName} {"{"}
      </YellowText>
      {renderBasicInfo()}
      <LineBreak />
      <Indent>
        {"> "}
        <YellowText>ul</YellowText> <PurpleText>{"{"}</PurpleText>
        {renderJobFunctions()}
        <PurpleText>{"}"}</PurpleText>
      </Indent>
      <YellowText>{"}"}</YellowText>
    </>
  );
};
/* eslint-enable react/no-unescaped-entities */
