import React, { RefObject } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useContext } from 'react'

import { EventItem } from './EventItem'

import {
  Tracker,
  useIntersectionObserver,
} from '@/hooks/useIntersectionObserver'
import { Companies } from '@/constants/companies'
import { Skills } from '@/constants/skills'
import { PagePaths } from '@/pages/shared/routerConfig'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Backbone = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const MarioVine = styled.img`
  height: 100%;
  width: auto;
  position: absolute;
  top: 0;
`

const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 44px;
`

const TimelineEvent = styled.div`
  color: ${(props) => props.theme.palette.white};
`

const Col1TimelineEvent = styled(TimelineEvent)`
  color: ${(props) => props.theme.palette.white};
  :nth-of-type(3) {
    a > p {
      color: ${(props) => props.theme.palette.dark01};
    }
  }
`

const Col2TimelineEvent = styled(TimelineEvent)`
  :nth-of-type(1) {
    a > p {
      color: ${(props) => props.theme.palette.dark01};
    }
  }
`

export interface TimelineEvent {
  title: string
  date: string
  role: string
  marioToonSrc: string
  href: PagePaths
  techStack: { name: Skills; iconSrc: string }[]
  color: string
}

export const TimelineBackbone = () => {
  const themeContext = useContext(ThemeContext)
  const [visibility, targetRef] = useIntersectionObserver(
    Tracker.MARIO_VINE,
    0.12
  )

  const COL1_EVENTS: TimelineEvent[] = [
    {
      title: Companies.WTW,
      date: '2023',
      role: 'Software Engineer',
      marioToonSrc: '/assets/images/home/timeline/luigi.webp',
      href: PagePaths.WTW,
      techStack: [
        { name: Skills.REACT, iconSrc: '/assets/icons/extensions/react.svg' },
        {
          name: Skills.TYPESCRIPT,
          iconSrc: '/assets/icons/extensions/typescript.svg',
        },
        {
          name: Skills.NEXT_JS,
          iconSrc: '/assets/icons/extensions/nextjs.svg',
        },
        { name: Skills.GATSBY, iconSrc: '/assets/icons/extensions/gatsby.svg' },
        { name: Skills.MUI, iconSrc: '/assets/icons/extensions/mui.svg' },
        {
          name: Skills.SANITY,
          iconSrc: '/assets/icons/extensions/sanity.webp',
        },
      ],
      color: themeContext.palette.marioRed,
    },
    {
      title: Companies.SERAI,
      date: '2021',
      role: 'Software Engineer',
      marioToonSrc: '/assets/images/home/timeline/peach.webp',
      href: PagePaths.SERAI,
      techStack: [
        { name: Skills.REACT, iconSrc: '/assets/icons/extensions/react.svg' },
        {
          name: Skills.TYPESCRIPT,
          iconSrc: '/assets/icons/extensions/typescript.svg',
        },
        {
          name: Skills.NEXT_JS,
          iconSrc: '/assets/icons/extensions/nextjs.svg',
        },
        {
          name: Skills.REACT_QUERY,
          iconSrc: '/assets/icons/extensions/query.webp',
        },
        {
          name: Skills.STORYBOOK,
          iconSrc: '/assets/icons/extensions/storybook.svg',
        },
      ],
      color: themeContext.palette.marioBlue,
    },
    {
      title: Companies.MANULIFE,
      date: '2019',
      role: 'Frontend Developer',
      marioToonSrc: '/assets/images/home/timeline/bowser.webp',
      href: PagePaths.MANULIFE,
      techStack: [
        {
          name: Skills.ANGULAR,
          iconSrc: '/assets/icons/extensions/angular.svg',
        },
        {
          name: Skills.TYPESCRIPT,
          iconSrc: '/assets/icons/extensions/typescript.svg',
        },
        { name: Skills.HTML, iconSrc: '/assets/icons/extensions/html.svg' },
        { name: Skills.CSS, iconSrc: '/assets/icons/extensions/css.svg' },
      ],
      color: themeContext.palette.marioYellow,
    },
  ]

  const COL2_EVENTS: TimelineEvent[] = [
    {
      title: Companies.BCW,
      date: '2022',
      role: 'Frontend Developer',
      marioToonSrc: '/assets/images/home/timeline/toad.webp',
      href: PagePaths.BCW_GROUP,
      techStack: [
        { name: Skills.REACT, iconSrc: '/assets/icons/extensions/react.svg' },
        {
          name: Skills.TYPESCRIPT,
          iconSrc: '/assets/icons/extensions/typescript.svg',
        },
        {
          name: Skills.REACT_QUERY,
          iconSrc: '/assets/icons/extensions/query.webp',
        },
        { name: Skills.MUI, iconSrc: '/assets/icons/extensions/mui.svg' },
        {
          name: Skills.STRIPE,
          iconSrc: '/assets/icons/extensions/stripe.webp',
        },
      ],
      color: themeContext.palette.marioGreen,
    },

    {
      title: Companies.PAG,
      date: '2020',
      role: 'Software Developer',
      marioToonSrc: '/assets/images/home/timeline/yoshi.webp',
      href: PagePaths.PAG,
      techStack: [
        { name: Skills.REACT, iconSrc: '/assets/icons/extensions/react.svg' },
        {
          name: Skills.TYPESCRIPT,
          iconSrc: '/assets/icons/extensions/typescript.svg',
        },
        {
          name: Skills.CSHARP,
          iconSrc: '/assets/icons/extensions/c-sharp.svg',
        },
      ],
      color: themeContext.palette.marioRed,
    },
  ]

  console.log(visibility)

  const divRef = targetRef as RefObject<HTMLDivElement>

  return (
    <Container ref={divRef}>
      <Backbone>
        <MarioVine src="/assets/images/mario-vine.svg" alt="mario-vine" />
        <TimelineContainer>
          <div style={{ marginRight: '40px' }}>
            {COL1_EVENTS.map((event) => {
              return (
                <Col1TimelineEvent key={event.title}>
                  <EventItem {...event} />
                </Col1TimelineEvent>
              )
            })}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {COL2_EVENTS.map((event) => {
              return (
                <Col2TimelineEvent key={event.title}>
                  <EventItem {...event} />
                </Col2TimelineEvent>
              )
            })}
          </div>
        </TimelineContainer>
      </Backbone>
    </Container>
  )
}
