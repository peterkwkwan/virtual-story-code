export enum Projects {
  VIRTUAL_STORY_CODE = 'Virtual Story Code',
  MOVIES_DB = 'Latest Movies Releasing',
}

export const ProjectDetails: {
  [key: string]: { description: string; url: string; urlText: string }
} = {
  [Projects.VIRTUAL_STORY_CODE]: {
    description:
      'My personal website inspired by the aesthetic of Visual Studio Code',
    url: 'https://github.com/peterkwkwan/virtual-story-code',
    urlText: 'GitHub',
  },
  [Projects.MOVIES_DB]: {
    description:
      "Movies database that utilizes API from 'The Movie Database API'",
    url: 'https://github.com/peterkwkwan/latest_movies_releasing',
    urlText: 'GitHub',
  },
}
