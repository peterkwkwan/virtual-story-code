export enum Projects {
  VIRTUAL_STORY_CODE = 'Virtual Story Code',
  MOVIES_DB = 'Latest Movies Releasing',
  SANITY_STUDIO = 'Sanity Studio',
  CASE_OF_THE_MONTH = 'Scrapy - Case of the Month',
  DEFEND_JEDI_TEMPLE = 'Defend the Jedi Temple',
  METAMASK = 'MetaMask Wallet',
  ASTEROIDS = 'Asteroids',
  POKEAPI = 'PokéAPI React Native App',
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
  [Projects.SANITY_STUDIO]: {
    description:
      'Deeply customizable open-source headless CMS built on Sanity Content Lake',
    url: 'https://github.com/peterkwkwan/sanity-studio',
    urlText: 'GitHub',
  },
  [Projects.CASE_OF_THE_MONTH]: {
    description:
      'Scrapy web crawler which monitors CollegePT for monthly updates',
    url: 'https://github.com/peterkwkwan/scrapy-case-of-the-month',
    urlText: 'GitHub',
  },
  [Projects.DEFEND_JEDI_TEMPLE]: {
    description: 'Web game where you help Yoda defend the against Order 66',
    url: 'https://github.com/peterkwkwan/Defend_the_Jedi_Temple_FE',
    urlText: 'GitHub',
  },
  [Projects.METAMASK]: {
    description: 'DApp using MetaMask as login, built on Ethereum chain',
    url: 'https://github.com/peterkwkwan/metamask_web3.0',
    urlText: 'GitHub',
  },
  [Projects.ASTEROIDS]: {
    description:
      'Game based off the 1979 Atari Asteroids. Built with pure JS & HTML',
    url: 'https://github.com/peterkwkwan/js_asteroids',
    urlText: 'GitHub',
  },
  [Projects.POKEAPI]: {
    description: 'React Native app for viewing Gen 1 Pokemon cards',
    url: 'https://github.com/peterkwkwan/pokeapi-viewer',
    urlText: 'GitHub',
  },
}
