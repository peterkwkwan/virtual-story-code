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
  
  job.function = {${job.functions.map((task, index) => {
    return `\n    task${index + 1}: "${task}"`
  })}
  }
  
  const techStack = [${job.techStack.map((stack) => {
    return `\n    "${stack}"`
  })}
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

    >ul {${job.functions
      .map((task, index) => {
        return `\n        li:nth-child(${index + 1}) {
            content: "${task}";
        }\n\n`
      })
      .join('')}
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
  <link rel="${educationDescription.location.city}" href="${
    educationDescription.location.country
  }">
</head>

<body>
  <h1>${educationDescription.degreeName}</h1>${
    educationDescription.subjects
      ? educationDescription.subjects
          ?.map((subject) => {
            return `\n  <h2>${subject}</h2>`
          })
          .join('')
      : ''
  }
</body>`
}
