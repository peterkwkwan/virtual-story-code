import React, { RefObject } from 'react'
import styled from 'styled-components'

import { EventItem } from './EventItem'

import {
  Tracker,
  useIntersectionObserver,
} from '@/hooks/useIntersectionObserver'
import { Companies } from '@/constants/companies'
import { ActionButton } from '@/components/elements/ActionButton'

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

  :nth-of-type(1) {
    h3 {
      background-color: ${(props) => props.theme.palette.marioRed};
    }
  }
  :nth-of-type(2) {
    h3 {
      background-color: ${(props) => props.theme.palette.marioBlue};
    }
  }
  :nth-of-type(3) {
    h3 {
      background-color: ${(props) => props.theme.palette.marioYellow};
      color: ${(props) => props.theme.palette.dark01};
    }
  }
`

const Col2TimelineEvent = styled(TimelineEvent)`
  :nth-of-type(1) {
    h3 {
      background-color: ${(props) => props.theme.palette.marioGreen};
      color: ${(props) => props.theme.palette.dark01};
    }
  }
  :nth-of-type(2) {
    h3 {
      background-color: ${(props) => props.theme.palette.marioRed};
    }
  }
`

export interface TimelineEvent {
  title: string
  date: string
  role: string
  iconSrc: string
  techStack: string[]
}

const COL1_EVENTS: TimelineEvent[] = [
  {
    title: Companies.WTW,
    date: '2023',
    role: 'Software Engineer',
    iconSrc: '/assets/icons/companies/willis-towers-watson.webp',
    techStack: [
      '/assets/icons/extensions/react.svg',
      '/assets/icons/extensions/typescript.svg',
      '/assets/icons/extensions/nextjs.svg',
      '/assets/icons/extensions/gatsby.svg',
      '/assets/icons/extensions/mui.svg',
      '/assets/icons/extensions/sanity.webp',
    ],
  },
  {
    title: Companies.SERAI,
    date: '2021',
    role: 'Software Engineer',
    iconSrc: '/assets/icons/companies/serai.webp',
    techStack: [
      '/assets/icons/extensions/react.svg',
      '/assets/icons/extensions/typescript.svg',
      '/assets/icons/extensions/nextjs.svg',
      '/assets/icons/extensions/query.webp',
      '/assets/icons/extensions/storybook.svg',
    ],
  },
  {
    title: Companies.MANULIFE,
    date: '2019',
    role: 'Frontend Developer',
    iconSrc: '/assets/icons/companies/manulife.webp',
    techStack: [
      '/assets/icons/extensions/angular.svg',
      '/assets/icons/extensions/typescript.svg',
      '/assets/icons/extensions/html.svg',
      '/assets/icons/extensions/css.svg',
    ],
  },
]

const COL2_EVENTS: TimelineEvent[] = [
  {
    title: Companies.BCW,
    date: '2022',
    role: 'Frontend Developer',
    iconSrc: '/assets/icons/companies/bcw-group.webp',
    techStack: [
      '/assets/icons/extensions/react.svg',
      '/assets/icons/extensions/typescript.svg',
      '/assets/icons/extensions/query.webp',
      '/assets/icons/extensions/mui.svg',
      '/assets/icons/extensions/stripe.webp',
    ],
  },
  {
    title: Companies.PAG,
    date: '2020',
    role: 'Software Developer',
    iconSrc: '/assets/icons/companies/pag.webp',
    techStack: [
      '/assets/icons/extensions/react.svg',
      '/assets/icons/extensions/typescript.svg',
      '/assets/icons/extensions/c-sharp.svg',
    ],
  },
]

export const TimelineBackbone = () => {
  const [visibility, targetRef] = useIntersectionObserver(
    Tracker.MARIO_VINE,
    0.12
  )

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
