import styled from 'styled-components'

import { ExternalLink } from '@/components/elements/ExternalLink'

export enum Blogs {
  IMPOSTOR = 'Overcoming Impostor Syndrome',
  FIVE_TIPS = '5 Tips for Aspiring Developers',
  FIVE_JS_FEATURES = '5 JavaScript features you (probably) haven’t used',
  CHATGPT_SUPERCHARGE = '4 Ways ChatGPT can supercharge your development process',
}

export const BlogLinks: { [key: string]: string } = {
  [Blogs.IMPOSTOR]:
    'https://medium.com/codex/self-taught-perspectives-how-to-overcome-impostor-syndrome-13166ff28c81',
  [Blogs.FIVE_TIPS]:
    'https://medium.com/codex/5-tips-for-aspiring-developers-7bba426072fa',
  [Blogs.FIVE_JS_FEATURES]:
    'https://medium.com/codex/5-javascript-features-you-probably-havent-used-85d5dfcb8dc1',
  [Blogs.CHATGPT_SUPERCHARGE]:
    'https://medium.com/codex/4-ways-chatgpt-can-supercharge-your-development-process-750a58390510',
}

const Container = styled.div`
  color: ${(props) => props.theme.palette.text01};
  margin: 0 auto;
  max-width: 80%;
  font-family: 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  p {
    line-height: 28px;
    word-break: break-word;
  }
  figure {
    img {
      width: 100%;
      border: 2px solid grey;
    }
  }
  li {
    :not(:first-of-type) {
      margin-top: 12px;
    }
  }
`

const StyledCaption = styled.figcaption`
  color: ${(props) => props.theme.palette.text02};
  text-align: center;
  font-size: 0.875rem;
`

export const BlogSnippet = {
  [Blogs.IMPOSTOR]: (
    <Container>
      <h1>{Blogs.IMPOSTOR}</h1>
      <p>
        The tech industry is relentless when it comes to innovation. This rapid
        change can be daunting for developers who lack the time and energy to
        keep up.
      </p>
      <p>
        During code reviews, interviews, and technical meetings, shortcomings
        are easily exposed, which can then lead to the feeling of&nbsp;
        <ExternalLink
          text="Impostor
          Syndrome"
          href="https://en.wikipedia.org/wiki/Impostor_syndrome"
        />
        .
      </p>
      <p>
        This feeling is not limited to these those new to the field. Seasoned
        coders with 10+ years of experience feel it too. We as humans cannot
        help but compare ourselves with others, and chances are, you will run
        into others that are better than you.
      </p>
      <p>
        Below are points I remind myself time and time again to beat this mental
        pressure, as impostor syndrome is very much a struggle within your own
        mind.
      </p>
      <h2>
        1. If you are the smartest person in the room, you are in the wrong room
      </h2>
      <p>
        We cannot escape the fact that someone, somewhere out there, has more
        knowledge, experience and talent in whatever field that you are in, and
        that is completely OK!
      </p>
      <p>
        We all have met that one guy on our team that codes after work, on
        weekends, does the daily&nbsp;
        <ExternalLink text="Leetcode" href="https://leetcode.com/" />
        &nbsp;challenge, and still somehow has energy to teach coding as a
        side-gig.
      </p>
      <p>
        I spoke to this guy on my team recently, and to my surprise, he too has
        the same anxiety of not being ‘good enough’.
      </p>
      <p>
        I thought to myself, “Wow…if he feels this too, then when am I ever
        going to be good enough?!”.
      </p>

      <p>Thus, I came to this realisation: it is OK to not be good enough!</p>
    </Container>
  ),
  [Blogs.FIVE_TIPS]: (
    <Container>
      <h1>{Blogs.FIVE_TIPS}</h1>
      <p>
        My self-taught journey started nearly 5 years ago, in late 2017. Looking
        back, there are definitely situations I would have handled differently,
        and some things I wish someone had told me earlier.
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
        (honeymoon), then finally a prolonged stage of feeling stuck (plateau).
      </p>
      <figure>
        <img
          src="https://miro.medium.com/v2/resize:fit:1080/format:webp/1*lXv5aMOwsu0G4XE5pQDPkA.jpeg"
          alt="Man pushing boulder"
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
        <li>Discouraged by the lack interviews & job application responses</li>
      </ul>
    </Container>
  ),
  [Blogs.FIVE_JS_FEATURES]: (
    <Container>
      <h1>{Blogs.FIVE_JS_FEATURES}</h1>
      <p>
        The&nbsp;
        <ExternalLink
          text="2022 The State of JavaScript"
          href="https://2022.stateofjs.com/en-us/"
        />
        &nbsp;survey came out a few weeks ago. The survey has proven to be a
        fascinating litmus test of where JavaScript is headed, as well as a
        breeding ground for developers to&nbsp;
        <ExternalLink
          text="vent their frustration towards
        Angular"
          href="https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/"
        />
        .
      </p>
      <figure>
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*fW6piHpnKBSH7k8oj7vj-Q.png"
          alt="JS Framework Popularity Chart"
        />
        <StyledCaption>
          Google — please shutdown Angular like you do with all your other
          projects
        </StyledCaption>
      </figure>
      <p>
        <ExternalLink
          text="One particularly interesting section"
          href="https://2022.stateofjs.com/en-US/features/language/"
        />
        &nbsp;highlights new(ish) JavaScript features which many developers
        haven’t used or haven’t heard of. If you are reading this, chances are,
        you probably don’t know some of these features either (don’t worry, me
        too).
      </p>
      <figure>
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8Zrmg9UcZAXZACLjo6jEkw.png"
          alt="Temporal"
        />
        <StyledCaption>Nani??</StyledCaption>
      </figure>
      <p>
        So, instead of being intimidated by new tools and terminology (I
        certainly am!), I’ll aim to give you a TLDR (too long; didn’t read)
        version of 5 lesser-known features in JavaScript.
      </p>
      <h2>5. Promise.allSettled() (37.7% never heard of it)</h2>
      <p>
        <ExternalLink
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled"
          text="Promise.allSettled()"
        />
        &nbsp;is a static method that accepts an iterable (e.g. array) of
        promises. Example below:
      </p>
    </Container>
  ),
  [Blogs.CHATGPT_SUPERCHARGE]: (
    <Container>
      <h1>{Blogs.CHATGPT_SUPERCHARGE}</h1>
      <h2>1. Writing Documentation</h2>
      <p>
        Documentation, an oft-neglected but critical component in development,
        is one of the low hanging fruits for ChatGPT. Nobody wants to write it,
        but everybody wants it.
      </p>
      <figure>
        <img
          src="https://miro.medium.com/v2/resize:fit:1280/0*LDUWvWInhXM4ZaSw.gif"
          alt="Sweaty ChatGPT"
        />
        <StyledCaption>
          Rare footage of ChatGPT writing 10 pages of documentation in under 5
          seconds
        </StyledCaption>
      </figure>
      <p>
        I’ve come across scenarios where new developers have joined teams only
        to be overwhelmed by the industry jargon, internal tools, and coding
        practices. This can easily be solved with good documentation.
      </p>
      <p>
        Enter ChatGPT. It’s no secret that ChatGPT can pump out Ivy League
        quality essays. Developers will be able to generate high-quality
        documentation for their code in a matter of minutes. This will
        undoubtedly save time and ensure that the code is well-documented and
        easy to understand for other developers.
      </p>
      <h2>2. Stakeholder Management</h2>
      <p>
        Writing documentation is great and all, but what about emails or text
        messages?
      </p>
    </Container>
  ),
}
