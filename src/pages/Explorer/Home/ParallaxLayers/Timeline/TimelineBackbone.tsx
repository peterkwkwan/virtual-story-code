import React, { RefObject, useMemo } from 'react'
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
import { useBoundStore } from '@/hooks/useBoundStore'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

const Col1TimelineEvent = styled(TimelineEvent)<{ show: boolean }>`
  color: ${(props) => props.theme.palette.white};
  position: relative;
  opacity: 0;
  :nth-of-type(1) {
    animation: ${(props) =>
      props.show
        ? '1s linear 0.1s showEventsCol1 forwards'
        : '0.5s linear hideEvents'};
  }
  :nth-of-type(2) {
    animation: ${(props) =>
      props.show
        ? '1s linear 0.5s showEventsCol1 forwards'
        : '0.5s linear hideEvents'};
  }
  :nth-of-type(3) {
    animation: ${(props) =>
      props.show
        ? '1s linear 0.9s showEventsCol1 forwards'
        : '0.5s linear hideEvents'};
    a > p {
      color: ${(props) => props.theme.palette.dark01};
    }
  }
`

const Col2TimelineEvent = styled(TimelineEvent)<{ show: boolean }>`
  position: relative;
  opacity: 0;
  :nth-of-type(1) {
    animation: ${(props) =>
      props.show
        ? '1s linear 0.3s showEventsCol2 forwards'
        : '0.5s linear hideEvents'};
    a > p {
      color: ${(props) => props.theme.palette.dark01};
    }
  }
  :nth-of-type(2) {
    animation: ${(props) =>
      props.show
        ? '1s linear 0.7s showEventsCol2 forwards'
        : '0.5s linear hideEvents'};
  }

  @keyframes showEventsCol1 {
    0% {
      opacity: 0;
      right: 100px;
    }
    100% {
      opacity: 1;
      right: 0px;
    }
  }
  @keyframes showEventsCol2 {
    0% {
      opacity: 0;
      left: 100px;
    }
    100% {
      opacity: 1;
      left: 0px;
    }
  }
  @keyframes hideEvents {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const TimelineRefDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 1;
  height: 1;
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
  const [, targetRef] = useIntersectionObserver(Tracker.MARIO_VINE, 0.12)
  const [, timelineRef] = useIntersectionObserver(Tracker.TIMELINE, 0.12)
  const visibility = useBoundStore((state) => state.visibility)

  const showTimeline =
    visibility[Tracker.TIMELINE] && !visibility[Tracker.MY_CAREER_TITLE_CARD]

  const COL1_EVENTS: TimelineEvent[] = useMemo(
    () => [
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
          {
            name: Skills.GATSBY,
            iconSrc: '/assets/icons/extensions/gatsby.svg',
          },
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
    ],
    []
  )

  const COL2_EVENTS: TimelineEvent[] = useMemo(
    () => [
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
    ],
    []
  )

  const divRef = targetRef as RefObject<HTMLDivElement>
  const timelineDivRef = timelineRef as RefObject<HTMLDivElement>

  return (
    <Container ref={divRef}>
      <Backbone>
        <MarioVine src="/assets/images/mario-vine.svg" alt="mario-vine" />
        <TimelineContainer>
          <div style={{ marginRight: '40px', position: 'relative' }}>
            {COL1_EVENTS.map((event) => {
              return (
                <Col1TimelineEvent key={event.title} show={showTimeline}>
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
                <Col2TimelineEvent key={event.title} show={showTimeline}>
                  <EventItem {...event} />
                </Col2TimelineEvent>
              )
            })}
          </div>
        </TimelineContainer>
      </Backbone>
      <TimelineRefDiv ref={timelineDivRef} />
    </Container>
  )
}
