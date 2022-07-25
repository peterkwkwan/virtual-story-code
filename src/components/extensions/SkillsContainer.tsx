import React, { useState } from "react";
import styled from "styled-components";
import { ExtensionsButton } from "./ExtensionsButton";
import { Extension } from "./shared/types";
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

const CollapsibleFolder = styled.div<StyledFolder>`
  visibility: ${(props) => (props.opened ? "visible" : "hidden")};
`;

const ExtensionIcon = styled.img`
  width: 42px;
  height: 42px;
  padding: 10px 14px 10px 0;
`;

const extensions: Extension[] = [
  {
    name: "React",
    icon: <ExtensionIcon src="../../assets/icons/extensions/react.svg" />,
    url: "",
    description:
      "Open-source front-end JavaScript library for building user interfaces based on UI components",
  },
  {
    name: "JavaScript",
    icon: <ExtensionIcon src="../../assets/icons/extensions/javascript.svg" />,
    url: "",
    description:
      "Open-source front-end JavaScript library for building user interfaces based on UI components",
  },
  {
    name: "TypeScript",
    icon: <ExtensionIcon src="../../assets/icons/extensions/typescript.svg" />,
    url: "",
    description:
      "Open-source front-end JavaScript library for building user interfaces based on UI components",
  },
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
      <CollapsibleFolder opened={opened}>
        {extensions.map((extension) => (
          <ExtensionsButton key={extension.name} {...extension} />
        ))}
      </CollapsibleFolder>
    </Container>
  );
};
