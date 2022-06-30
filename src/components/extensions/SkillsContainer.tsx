import React, { useState } from "react";
import styled from "styled-components";

interface StyledFolder {
  opened: boolean;
}

const Container = styled.div`
  margin: 12px 0 0;
`;

const FolderButton = styled.button<StyledFolder>`
  width: 100%;
  background-color: inherit;
  border: none;
  line-height: 22px;
  padding: 0;
  white-space: pre;
  text-decoration: none;
  font-size: 11px;
  font-weight: 600;
  font-family: sans-serif;
  text-align: start;
  color: inherit;
  cursor: pointer;
  &:before {
    content: url("../../assets/icons/arrow.svg");
    display: inline-block;
    transform: ${(props) => props.opened && "rotate(90deg)"};
    margin: 0 5px;
  }

  &:hover {
    background-color: ${(props) => props.theme.palette.buttonFocus};
  }
`;

const techStack = [
  { title: "React", img: "" },
  { title: "JavaScript", img: "" },
  { title: "TypeScript", img: "" },
];

export const SkillsContainer = () => {
  const [opened, setOpened] = useState(true);
  const handleFolderClick = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <Container>
      <FolderButton opened={opened} onClick={handleFolderClick}>
        INSTALLED
      </FolderButton>
      {opened &&
        techStack.map((tech) => <div key={tech.title}>{tech.title}</div>)}
    </Container>
  );
};
