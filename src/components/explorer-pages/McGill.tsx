import React from "react";
import { useLastContributed } from "../../utils/useLastContributed";
import { EducationDescriptionHTML } from "./shared/EducationDescriptionHTML";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { IEducationDescription } from "./shared/types";

export const McGill = () => {
  const date = new Date("2014-05-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 3 authors (Mom & Dad and 1 other)`;

  const educationDescription: IEducationDescription = {
    schoolName: "McGill University",
    year: "2014",
    location: "Montreal, Canada",
    degreeType: "Bachelors",
    degreeName: "Bachelor of Arts",
    subjects: ["Major in Economics", "Minor in International Development"],
  };

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={26}>
      <EducationDescriptionHTML educationDescription={educationDescription} />
    </ExplorerWrapper>
  );
};
