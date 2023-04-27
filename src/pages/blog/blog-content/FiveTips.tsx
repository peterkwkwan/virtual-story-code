import React from 'react'

import { Container, InnerContainer, StyledCaption } from './styles'
import { BlogLinks, Blogs } from '../shared/constants'
import { ContinueReading } from './ContinueReading'
import { BlockQuote } from '../shared/BlockQuote'

import SkeletonImage from '@/components/elements/SkeletonImage'
import { ExternalLink } from '@/components/elements/ExternalLink'

export const FiveTips = () => {
  return (
    <Container>
      <InnerContainer>
        <h1>{Blogs.FIVE_TIPS}</h1>
        <p>
          My self-taught journey started nearly 5 years ago, in late 2017.
          Looking back, there are definitely situations I would have handled
          differently, and some things I wish someone had told me earlier.
        </p>
        <p>These are my top 5 tips for any aspiring developer!</p>
        <h2>1. Be in it for the right reason</h2>
        <p>
          During the first year of learning how to program, I encountered 3
          phases:
        </p>
        <ol>
          <li>
            The initial <i>eureka </i>
            moment — discovering the joy of coding after making my first “hello
            world” app. Everything just ‘clicks’
          </li>
          <li>
            The <i>honeymoon</i> phase
          </li>
          <li>
            The <i>plateau</i>
          </li>
        </ol>
        <p>
          Most self-taught developers I met have experienced this general
          trajectory of growth, starting with an initial excitement period
          (eureka), followed by an adrenaline-filled stretch of high growth
          (honeymoon), then finally a prolonged stage of feeling stuck
          (plateau).
        </p>
        <figure>
          <SkeletonImage
            src="https://miro.medium.com/v2/resize:fit:1080/format:webp/1*lXv5aMOwsu0G4XE5pQDPkA.jpeg"
            alt="Man pushing boulder"
            height="auto"
            width="100%"
            style={{ aspectRatio: '3/2' }}
          />
          <StyledCaption>It&apos;s gonne be a grind</StyledCaption>
        </figure>
        <p>
          The plateau is where most self-learners will drop out. This can be due
          to a variety of reasons (but not limited to):
        </p>
        <ul>
          <li>Coding is no longer enjoyable</li>
          <li>Feeling overwhelmed & burnt-out</li>
          <li>
            Discouraged by the lack interviews & job application responses
          </li>
        </ul>
        <p>
          I remember feeling extremely demoralised from the lack of traction I
          was gaining during my job hunting process. Many applications went
          unnoticed, and recruiters were reluctant to pass along my CV, due to
          my lack of relevant degree or work experience. At one point, I felt
          like giving up on my dream and sticking with my finance job.
        </p>
        <p>
          Sacrifice, grit, determination — these traits are just some of the
          ingredients for success. However, I would argue that{' '}
          <strong>passion</strong> is the most vital. This process is a long and
          difficult road, and you will question whether all those weekends spent
          coding instead of relaxing with friends is worth it. Therefore,{' '}
          <strong>it is important that you enjoy coding!</strong>
        </p>
        <p>
          <strong>Passion</strong> is what will keep you motivated. Remind
          yourself daily why you are doing this. Personally, nothing helps
          motivate me more than the following excerpt from Apple’s late founder.
        </p>
        <BlockQuote
          text="Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle."
          creditProps={{
            text: 'Steve Jobs, 2005 Stanford Commencement address',
            externalLink:
              'https://news.stanford.edu/2005/06/12/youve-got-find-love-jobs-says/',
          }}
        />

        <h2>2. Pick a path and stick to it</h2>
        <p>
          Early on in my coding journey, I was fascinated by the seemingly
          endless types of languages and frameworks. I wanted to try everything!
        </p>

        <p>
          After learning HTML, CSS and Javascript, I jumped into Python since it
          was becoming increasingly popular among the developer community. After
          learning Python for a few weeks, I tried going back to Javascript.
          However, I frequently mixed up simple syntax such as loops and
          conditional blocks between the two languages.
        </p>
        <p>
          To add fuel to the fire, I got a rare interview opportunity in the
          form of a take-home project. I was ecstatic! This project required me
          to build a full stack app using Java and Spring Boot. I scrambled to
          read everything about Java, and proceeded to purchase a course on
          Udemy so I could get up to speed quicker.
        </p>
        <p>
          As you might have guessed, this Java experiment was a colossal
          failure. I struggled with Java’s strong typing, I had no idea
          who&nbsp;
          <ExternalLink text="Tomcat" href="https://tomcat.apache.org/" /> was,
          and I spent numerous hours fighting with Eclipse to get it working.
          Having no solid foundation ended up slowing my growth and wasting
          valuable time.
        </p>

        <ContinueReading href={BlogLinks[Blogs.FIVE_TIPS]} />
      </InnerContainer>
    </Container>
  )
}
