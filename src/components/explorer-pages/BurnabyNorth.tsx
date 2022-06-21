import React from "react";
import { useLastContributed } from "../../utils/useLastContributed";
import { EducationDescriptionHTML } from "./shared/EducationDescriptionHTML";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { IEducationDescription } from "./shared/types";

export const BurnabyNorth = () => {
  const date = new Date("2009-06-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 3 authors (Mom & Dad and 1 other)`;

  const educationDescription: IEducationDescription = {
    schoolName: "Burnaby North",
    year: "2009",
    location: { city: "Vancouver", country: "Canada" },
    degreeType: "secondary education",
    degreeName: "High School Diploma",
  };

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={22}>
      <EducationDescriptionHTML educationDescription={educationDescription} />
    </ExplorerWrapper>
  );
};
