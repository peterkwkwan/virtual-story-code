import {
  IEducationDescription,
  IJobDescription,
  INonTechJobDescription,
} from './types'

export const getTsxEditorDefaultValue = (job: IJobDescription) => {
  return `import React from 'react';
import Job from 'career';
  
export const WillisTowersWatson = () => {
  const job = new Job("${job.companyName}")
  
  job.date = "November 2022 - Present"
  job.role = "${job.role}"
  job.location = "${job.location}"
  job.companyDescription = "${job.companyDescription}"
  
  job.function1 = {
    task: "Migrated Material UI v4 to v5 in Career Navigator legacy app, refactoring over 3000 lines of code with respect to breaking changes. Resulted in improved developer experience and resolved 20+ legacy bugs"
  }
  
  const techStack = [
    "React",
    "Gatsby",
    "TypeScript",
    "JavaScript",
    "C#",
    "AngularJS",
    "styled-components",
    "Material UI",
    "Git",
  ]
  
  job.integrate(techStack)
}`
}

export const getScssEditorDefaultValue = (job: INonTechJobDescription) => {
  return `@import 'work-experience.scss';

.details {
    animation-name: "${job.companyName}";
    order: "${job.date}";
    position: "${job.role}";
    grid-area: "${job.location}";
    background: "${job.companyDescription}";

    >ul {
        li:nth-child(1) {
            content: "Official training mentor for 3 new joiners in the Relationship Management team.";
        }

        li:nth-child(2) {
            content: "Managed 50+ client relationships across investment banking, law firm & private equity sectors to ensure the client’s needs are met.";
        }

        li:nth-child(3) {
            content: "Identify client motivations, enabling cross-selling plus up-selling opportunities.";
        }
    }
}`
}

export const getHtmlEditorDefaultValue = (
  educationDescription: IEducationDescription
) => {
  return `<!DOCTYPE html>
  
<html lang="en">
  
<head>
  <meta description="education">
  <meta name="degree" content="${educationDescription.degreeType}">
  <meta name="year" content="${educationDescription.year}">
  <title>${educationDescription.schoolName}</title>
  <link rel="${educationDescription.location.city}" href="${educationDescription.location.country}">
</head>

<body>
  <h1>Bachelor of Arts</h1>
  <h2>Major in Economics</h2>
  <h2>Minor in International Development</h2>
</body>`
}
