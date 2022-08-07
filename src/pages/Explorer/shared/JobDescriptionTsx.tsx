import React from 'react'

import { ReactImports } from './ReactImports'
import {
  DarkBlueText,
  PurpleText,
  Indent,
  LineBreak,
  BlueText,
  LightBlueText,
  StringText,
  GreenText,
  LightYellowText,
  YellowBrackets,
} from './StyledText'
import { IJobDescription } from './types'

export const JobDescriptionTsx = ({
  jobDescription,
}: {
  jobDescription: IJobDescription;
}) => {
  const {
    role,
    companyName,
    date,
    location,
    isCurrentRole,
    companyDescription,
    functions,
    techStack,
  } = jobDescription

  const basicInfo: Partial<IJobDescription> = {
    date: date,
    role: role,
    location: location,
    companyDescription: companyDescription,
  }

  /* eslint-disable react/no-unescaped-entities */

  const renderBasicInfo = () => {
    const elementList: JSX.Element[] = []
    for (const property in basicInfo) {
      elementList.push(
        <div key={property}>
          <DarkBlueText>const</DarkBlueText> <BlueText>{property}</BlueText> ={' '}
          <StringText>
            "{basicInfo[property as keyof Partial<IJobDescription>]}"
          </StringText>
        </div>
      )
    }
    return elementList
  }

  return (
    <>
      <ReactImports />
      <div>
        <PurpleText>export</PurpleText> <DarkBlueText>const</DarkBlueText>{' '}
        <LightYellowText>{companyName}</LightYellowText> ={' '}
        <YellowBrackets>{'() '}</YellowBrackets>
        {'=> '} <YellowBrackets>{'{'}</YellowBrackets>
        <Indent>
          {isCurrentRole && (
            <>
              {/* <Indent> */}
              <DarkBlueText>const</DarkBlueText> <PurpleText>[</PurpleText>
              <BlueText>isCurrentRole</BlueText>
              <PurpleText>]</PurpleText> = <GreenText>React</GreenText>.
              <LightYellowText>useState</LightYellowText>
              <PurpleText>(</PurpleText>
              <BlueText>true</BlueText>
              <PurpleText>)</PurpleText>
              {/* </Indent> */}
            </>
          )}
          <LineBreak />
          {/* <Indent> */}
          <DarkBlueText>const </DarkBlueText>
          <BlueText>job </BlueText>= <DarkBlueText>new </DarkBlueText>
          <GreenText>Job</GreenText>
          <PurpleText>(</PurpleText>
          <StringText>"{companyName}"</StringText>
          <PurpleText>)</PurpleText>
          <LineBreak />
          {/* </Indent> */}
          {renderBasicInfo()}
          {functions.map((task, idx) => {
            return (
              <React.Fragment key={task}>
                <LineBreak />
                <DarkBlueText>const</DarkBlueText>{' '}
                <LightYellowText>project{idx + 1}</LightYellowText> ={' '}
                <DarkBlueText>function</DarkBlueText>{' '}
                <PurpleText>{'() {'} </PurpleText>
                <Indent>
                  <LightBlueText>console</LightBlueText>.
                  <LightYellowText>log</LightYellowText>
                  <DarkBlueText>(</DarkBlueText>
                  <StringText>"{task}"</StringText>
                  <DarkBlueText>)</DarkBlueText>
                </Indent>
                <PurpleText>{'}'} </PurpleText>
              </React.Fragment>
            )
          })}
          <LineBreak />
          <>
            <DarkBlueText>const</DarkBlueText> <BlueText>techStack</BlueText> ={' '}
            <PurpleText>[ </PurpleText>
            <Indent>
              {techStack?.map((stack) => {
                return (
                  <div key={stack}>
                    <StringText>"{stack}",</StringText>
                  </div>
                )
              })}
            </Indent>
            <PurpleText>] </PurpleText>
          </>
        </Indent>
        <YellowBrackets>{'}'}</YellowBrackets>
      </div>
    </>
  )
}
/* eslint-enable react/no-unescaped-entities */
