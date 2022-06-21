import React from "react";
import { useLastContributed } from "../../utils/useLastContributed";
import { EducationDescriptionHTML } from "./shared/EducationDescriptionHTML";
import { ExplorerWrapper } from "./shared/ExplorerWrapper";
import { IEducationDescription } from "./shared/types";

export const HKU = () => {
  const date = new Date("2015-06-01");
  const diff = useLastContributed(date);
  const contributors = `${diff} | 3 authors (Mom & Dad and 1 other)`;

  const educationDescription: IEducationDescription = {
    schoolName: "HKU Space",
    year: "2015",
    location: { city: "Hong Kong", country: "Hong Kong SAR" },
    degreeType: "PPL",
    degreeName: "Private Pilot License",
    educationType: { rel: "aviation", href: "license" },
    subjects: ["Certificate in Australian Private Pilot License (PPL)"],
  };

  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={22}>
      <EducationDescriptionHTML educationDescription={educationDescription} />
    </ExplorerWrapper>
  );
};
