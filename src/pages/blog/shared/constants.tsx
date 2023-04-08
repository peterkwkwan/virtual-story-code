import styled from 'styled-components'

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
        are easily exposed, which can then lead to the feeling of Impostor
        Syndrome.
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
      <h6>
        1. If you are the smartest person in the room, you are in the wrong room
      </h6>
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
      <h6>1. Be in it for the right reason</h6>
      <p>
        During the first year of learning how to program, I encountered 3
        phases:
      </p>
    </Container>
  ),
  [Blogs.FIVE_JS_FEATURES]: (
    <Container>
      <h1>{Blogs.FIVE_JS_FEATURES}</h1>
      <p>
        The 2022 The State of JavaScript survey came out a few weeks ago. The
        survey has proven to be a fascinating litmus test of where JavaScript is
        headed, as well as a breeding ground for developers to vent their
        frustration towards Angular.
      </p>
      <figure>
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*fW6piHpnKBSH7k8oj7vj-Q.png"
          alt="JS Framework Popularity Chart"
        />
        <figcaption>
          Google — please shutdown Angular like you do with all your other
          projects
        </figcaption>
      </figure>
    </Container>
  ),
  [Blogs.CHATGPT_SUPERCHARGE]: (
    <Container>
      <h1>{Blogs.CHATGPT_SUPERCHARGE}</h1>
      <h6>1. Writing Documentation</h6>
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
        <figcaption>
          Rare footage of ChatGPT writing 10 pages of documentation in under 5
          seconds
        </figcaption>
      </figure>
    </Container>
  ),
}
