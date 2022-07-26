import React, { useState } from "react";
import styled from "styled-components";
import { ExtensionsButton } from "./ExtensionsButton";
import { ExtensionsList } from "./shared/ExtensionsList";
interface StyledFolder {
  opened: boolean;
}

const Container = styled.div`
  margin: 12px 0 0;
  height: calc(100% - 12px - 19.5px);
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

const CollapsibleFolder = styled.div<StyledFolder>`
  visibility: ${(props) => (props.opened ? "visible" : "hidden")};
  height: calc(100% - 22px);
  overflow-y: auto;
`;

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
      <CollapsibleFolder opened={opened}>
        {ExtensionsList.map((extension) => (
          <ExtensionsButton key={extension.name} {...extension} />
        ))}
      </CollapsibleFolder>
    </Container>
  );
};
