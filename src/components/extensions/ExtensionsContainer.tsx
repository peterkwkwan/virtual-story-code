import React from "react";
import styled from "styled-components";
import { ExtensionsSearchBox } from "./ExtensionsSearchBox";
import { SkillsContainer } from "./SkillsContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExtensionsContainer = () => {
  return (
    <Container>
      <ExtensionsSearchBox />
      <SkillsContainer />
    </Container>
  );
};
