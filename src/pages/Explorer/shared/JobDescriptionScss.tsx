import React from 'react'
import TypewriterComponent from 'typewriter-effect'

import {
  LightBlueText,
  LineBreak,
  StringText,
  YellowText,
  Indent,
  PurpleText,
  MutedGreenText,
  DarkBlueText,
} from './StyledText'
import { INonTechJobDescription } from './types'

export const JobDescriptionScss = ({
  jobDescription,
}: {
  jobDescription: INonTechJobDescription;
}) => {
  const { role, companyName, date, location, companyDescription, functions } =
    jobDescription

  const basicInfo: Partial<INonTechJobDescription> = {
    companyName: companyName,
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
          <LightBlueText>{property}</LightBlueText>:{' '}
          <StringText>
            "{basicInfo[property as keyof Partial<INonTechJobDescription>]}"
          </StringText>
          ;
        </div>
      )
    }
    return elementList
  }

  const renderJobFunctions = () => {
    const elementList: JSX.Element[] = []
    functions.map((item, idx) => {
      elementList.push(
        <div key={item}>
          <YellowText>li:nth-child</YellowText>
          <DarkBlueText>(</DarkBlueText>
          <MutedGreenText>{idx + 1}</MutedGreenText>
          <DarkBlueText>)</DarkBlueText> <DarkBlueText>{'{'}</DarkBlueText>
          <Indent>
            <LightBlueText>task</LightBlueText>:
            <StringText> "{item}"</StringText>;
          </Indent>
          <DarkBlueText>{'}'}</DarkBlueText>
        </div>
      )
    })
    return elementList
  }

  return (
    <>
      <div style={{ height: '18px' }}>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span style="color: #D7BA7D;">.work-experience {</span>'
              )
              .pauseFor(2500)
              .start()
          }}
        />
      </div>
      <Indent>
        <LineBreak />
        {renderBasicInfo()}
        <LineBreak />
        {'> '}
        <YellowText>ul</YellowText> <PurpleText>{'{'}</PurpleText>
        <Indent>{renderJobFunctions()}</Indent>
        <PurpleText>{'}'}</PurpleText>
      </Indent>
      <YellowText>{'}'}</YellowText>
    </>
  )
}
/* eslint-enable react/no-unescaped-entities */
