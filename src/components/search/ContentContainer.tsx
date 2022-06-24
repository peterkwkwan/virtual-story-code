import React from "react";
import styled from "styled-components";
import { Content } from "./Content";

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const Profiles = [
  { title: "GitHub", imgUrl: "" },
  { title: "LinkedIn", imgUrl: "" },
  { title: "Medium", imgUrl: "" },
  { title: "Resume", imgUrl: "" },
];

export const ContentContainer = () => {
  return (
    <Container>
      {Profiles.map((profile) => (
        <Content key={profile.title} {...profile} />
      ))}
    </Container>
  );
};
