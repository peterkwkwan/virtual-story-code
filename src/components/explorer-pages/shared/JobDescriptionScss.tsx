import React from "react";
import {
  LightBlueText,
  LineBreak,
  StringText,
  YellowText,
  Indent,
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
    const elementList = [];
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
  return (
    <>
      <YellowText>
        .{companyName} {"{"}
      </YellowText>
      {renderBasicInfo()}
      <LineBreak />
      <YellowText>{"}"}</YellowText>
    </>
  );
};
/* eslint-enable react/no-unescaped-entities */
