import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: white;
  height: 100%;
  letter-spacing: 1.5px;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Content = styled.div`
  padding: 32px;
`

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`

const Name = styled.h2`
  margin-top: 1.5rem;
  font-size: 2.5rem;
  font-weight: 200;
`

const StrikeThrough = styled.span`
  border-bottom: 6px solid #34d4ed84;
`

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 2rem 0;
  font-weight: 200;
`

const Footnote = styled.p`
  margin-top: 3rem;
  font-style: italic;
  font-size: 0.75rem;
`

export const MobilePage = () => {
  return (
    <Container>
      <Content>
        <Title>Hello there</Title>
        <Name>
          I&apos;m <StrikeThrough>Peter Kwan</StrikeThrough>
        </Name>
        <Paragraph>
          It looks like you are viewing my site on a{' '}
          <StrikeThrough>tablet or mobile device</StrikeThrough>
        </Paragraph>
        <Paragraph>
          Please view my site on a desktop computer* to get the&nbsp;
          <StrikeThrough>full experience</StrikeThrough>
        </Paragraph>
        <Footnote>*Screen pixel width should be at least 1024px</Footnote>
      </Content>
    </Container>
  )
}
