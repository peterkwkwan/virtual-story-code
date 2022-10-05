import React from 'react'
import TypewriterComponent from 'typewriter-effect'

import { useLastContributed } from '../../hooks/useLastContributed'
import { ExplorerWrapper } from './shared/ExplorerWrapper'
import {
  BlueText,
  DarkBlueText,
  GreenText,
  Indent,
  LightBlueText,
  LightYellowText,
  LineBreak,
  PurpleText,
  StringText,
  YellowBrackets,
  YellowText,
} from './shared/StyledText'

export const CathayDragon = () => {
  const date = new Date('2012-08-01')
  const diff = useLastContributed(date)
  const contributors = `${diff} | 4 authors (Anthony Yung and 3 others)`

  /* eslint-disable react/no-unescaped-entities */

  const internshipString = `<span style="color: #c586c0;">import </span><span style="color: #9cdcfe;">Intern </span>
  <span style="color: #c586c0;">from </span><span style="color: #ce9178;">'internship'</span>`
  return (
    <ExplorerWrapper contributors={contributors} numberOfLines={22}>
      <PurpleText>import</PurpleText> <LightBlueText>assert</LightBlueText>{' '}
      <PurpleText>from</PurpleText> <StringText>'chai'</StringText>
      <div style={{ height: '18px' }}>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter.typeString(internshipString).pauseFor(2500).start()
          }}
        />
      </div>
      <LineBreak />
      <LightYellowText>describe</LightYellowText>
      <YellowText>(</YellowText>
      <StringText>'Cathay Dragon intern'</StringText>,{' '}
      <DarkBlueText>function</DarkBlueText>
      <PurpleText>{'() {'}</PurpleText>
      <Indent>
        <DarkBlueText>const </DarkBlueText>
        <BlueText>intern </BlueText>= <DarkBlueText>new </DarkBlueText>
        <GreenText>Intern</GreenText>
        <PurpleText>(</PurpleText>
        <StringText>"Swire Summer Internship"</StringText>
        <PurpleText>)</PurpleText>
        <br />
        <BlueText>intern</BlueText>.<LightBlueText>date</LightBlueText> ={' '}
        <StringText>"Summer 2012"</StringText>
        <LineBreak />
        <LightYellowText>it</LightYellowText>
        <DarkBlueText>(</DarkBlueText>
        <StringText>'should draft iPhone storyboard.'</StringText>,
        <DarkBlueText> function </DarkBlueText>
        <YellowBrackets>{'() {'}</YellowBrackets>
        <Indent>
          <BlueText>assert</BlueText>.
          <LightYellowText>taskCompleted</LightYellowText>
          <PurpleText>(</PurpleText>
          <LightBlueText>intern</LightBlueText>.
          <LightYellowText>draftStoryboard</LightYellowText>
          <BlueText>()</BlueText>, <DarkBlueText>true</DarkBlueText>
          <PurpleText>)</PurpleText>;
        </Indent>
        <YellowBrackets>)</YellowBrackets>
        <DarkBlueText>{'}'}</DarkBlueText>;
        <LineBreak />
        <LightYellowText>it</LightYellowText>
        <DarkBlueText>(</DarkBlueText>
        <StringText>'should create new library catalog system.'</StringText>,
        <DarkBlueText> function </DarkBlueText>
        <YellowBrackets>{'() {'}</YellowBrackets>
        <Indent>
          <BlueText>assert</BlueText>.
          <LightYellowText>taskCompleted</LightYellowText>
          <PurpleText>(</PurpleText>
          <LightBlueText>intern</LightBlueText>.
          <LightYellowText>createCatalog</LightYellowText>
          <BlueText>()</BlueText>, <DarkBlueText>true</DarkBlueText>
          <PurpleText>)</PurpleText>;
        </Indent>
        <YellowBrackets>)</YellowBrackets>
        <DarkBlueText>{'}'}</DarkBlueText>;
        <LineBreak />
        <LightYellowText>it</LightYellowText>
        <DarkBlueText>(</DarkBlueText>
        <StringText>'should publish private Wikipedia page.'</StringText>,
        <DarkBlueText> function </DarkBlueText>
        <YellowBrackets>{'() {'}</YellowBrackets>
        <Indent>
          <BlueText>assert</BlueText>.
          <LightYellowText>taskCompleted</LightYellowText>
          <PurpleText>(</PurpleText>
          <LightBlueText>intern</LightBlueText>.
          <LightYellowText>publishInternalWiki</LightYellowText>
          <BlueText>()</BlueText>, <DarkBlueText>true</DarkBlueText>
          <PurpleText>)</PurpleText>;
        </Indent>
        <YellowBrackets>)</YellowBrackets>
        <DarkBlueText>{'}'}</DarkBlueText>;
        <LineBreak />
      </Indent>
      <PurpleText>{'}'}</PurpleText>
      <YellowText>)</YellowText>;
    </ExplorerWrapper>
  )
}

/* eslint-enable react/no-unescaped-entities */
