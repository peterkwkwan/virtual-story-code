import React from "react";
import {
  AngleBrackets,
  BaseText,
  BlueText,
  Indent,
  LightBlueText,
  LineBreak,
  StringText,
} from "./StyledText";

export const EducationDescriptionHTML = () => {
  /* eslint-disable react/no-unescaped-entities */
  interface AttributeProps {
    name: string;
    value: string;
  }

  const OpeningBrackets = ({
    text,
    attributes,
  }: {
    text: string;
    attributes?: AttributeProps[];
  }) => {
    return (
      <>
        <AngleBrackets>{"<"}</AngleBrackets>
        <BlueText>{text}</BlueText>
        {attributes &&
          attributes.map((attribute, index) => (
            <>
              <LightBlueText key={index}> {attribute.name}</LightBlueText>=
              <StringText>"{attribute.value}"</StringText>
            </>
          ))}
        <AngleBrackets>{">"}</AngleBrackets>
      </>
    );
  };
  const ClosingBrackets = ({ text }: { text: string }) => {
    return (
      <>
        <AngleBrackets>{"</"}</AngleBrackets>
        <BlueText>{text}</BlueText>
        <AngleBrackets>{">"}</AngleBrackets>
      </>
    );
  };
  return (
    <>
      <AngleBrackets>{"<!"}</AngleBrackets>
      <BlueText>DOCTYPE</BlueText>
      <LightBlueText> html</LightBlueText>
      <AngleBrackets>{">"}</AngleBrackets>
      <br />
      <OpeningBrackets
        text="html"
        attributes={[{ name: "lang", value: "en" }]}
      />
      <br />
      <OpeningBrackets text="head" />
      <Indent>
        <OpeningBrackets
          text="meta"
          attributes={[{ name: "charset", value: "UTF-8" }]}
        />
        <br />
        <OpeningBrackets
          text="meta"
          attributes={[
            { name: "name", value: "degree" },
            { name: "content", value: "bachelors" },
          ]}
        />
        <br />
        <OpeningBrackets
          text="meta"
          attributes={[
            { name: "name", value: "year" },
            { name: "content", value: "class-of-2014" },
          ]}
        />
        <br />
        <OpeningBrackets text="title" />
        McGill University
        <ClosingBrackets text="title" />
        <br />
        <OpeningBrackets
          text="link"
          attributes={[
            { name: "rel", value: "post-secondary-education" },
            { name: "href", value: "BurnabyNorth.md" },
          ]}
        />
      </Indent>
      <ClosingBrackets text="head" />
      <LineBreak />
      <OpeningBrackets text="body" />
      <Indent>
        <OpeningBrackets text="h1" />
        <Indent>
          <BaseText>Bachelor of Arts</BaseText>
        </Indent>
        <ClosingBrackets text="h1" />
        <LineBreak />
        <OpeningBrackets text="h2" />
        <Indent>
          <BaseText>Major in Economics</BaseText>
        </Indent>
        <ClosingBrackets text="h2" />
        <LineBreak />
        <OpeningBrackets text="h2" />
        <Indent>
          <BaseText>Minor in International Development</BaseText>
        </Indent>
        <ClosingBrackets text="h2" />
      </Indent>
      <ClosingBrackets text="body" />
    </>
  );
};
/* eslint-enable react/no-unescaped-entities */
