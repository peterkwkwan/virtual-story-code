import React, { RefObject } from 'react'
import styled from 'styled-components'

import { EventItem } from './EventItem'

import {
  Tracker,
  useIntersectionObserver,
} from '@/hooks/useIntersectionObserver'
import { Companies } from '@/constants/companies'

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
    color: ${(props) => props.theme.palette.dark01};
    h3 {
      background-color: ${(props) => props.theme.palette.marioYellow};
    }
  }
`

const Col2TimelineEvent = styled(TimelineEvent)`
  :nth-of-type(1) {
    h3 {
      background-color: ${(props) => props.theme.palette.marioGreen};
    }
  }
  :nth-of-type(2) {
    h3 {
      background-color: ${(props) => props.theme.palette.marioRed};
    }
  }
`

const COL1_EVENTS = [
  { title: Companies.WTW },
  { title: Companies.SERAI },
  { title: Companies.MANULIFE },
]

const COL2_EVENTS = [{ title: Companies.BCW }, { title: Companies.PAG }]

export const TimelineBackbone = () => {
  const [, targetRef] = useIntersectionObserver(Tracker.MARIO_VINE, 0.12)

  const divRef = targetRef as RefObject<HTMLDivElement>

  return (
    <Container ref={divRef}>
      <Backbone>
        <MarioVine src="/assets/images/mario-vine.svg" alt="mario-vine" />
        <TimelineContainer>
          <div>
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
