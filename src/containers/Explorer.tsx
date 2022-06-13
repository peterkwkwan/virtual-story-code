import React, { useState } from "react";
import styled from "styled-components";
import { ExplorerButton } from "../components/ExplorerButton";
import { Folder } from "../components/Folder";
import { FolderNames, initFolders } from "../constants";
import { PagePaths } from "../shared/routerConfig";

const ExplorerContainer = styled.aside`
  background-color: ${(props) => props.theme.color.dark03};
  height: 100%;
  width: 300px;
  color: ${(props) => props.theme.color.text01};
`;

const StyledHeaderBtn = styled.button<{ show: boolean }>`
  width: 100%;
  border: none;
  color: inherit;
  line-height: 22px;
  white-space: pre;
  text-decoration: none;
  font-size: 13px;
  text-align: start;
  font-family: Segoe WPC, Segoe UI, sans-serif;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.dark03};
  &:before {
    content: url("../../assets/icons/arrow.svg");
    display: inline-block;
    transform: ${(props) => props.show && "rotate(90deg)"};
    margin-right: 4px;
  }
`;

const rootFiles = [
  {
    title: "README.md",
    path: PagePaths.README,
    isRoot: true,
  },
  {
    title: "package.json",
    path: PagePaths.PACKAGE_JSON,
    isRoot: true,
  },
  {
    title: ".gitignore",
    path: PagePaths.GIT_IGNORE,
    isRoot: true,
  },
];

export const Explorer = () => {
  const [explorerFolders, setExplorerFolders] = useState(initFolders);

  const handleFolderClick = (value: FolderNames) => {
    const folderToChange = initFolders[value];

    folderToChange.opened = !folderToChange.opened;
    const newState = {
      [value]: {
        ...folderToChange,
      },
      ...explorerFolders,
    };

    setExplorerFolders(newState);
  };

  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow((prevState) => !prevState);
  };

  const folders = () => {
    const result = [];
    const orderedFolders = Object.keys(explorerFolders)
      .sort()
      .reduce((newObj, key) => {
        newObj[key as FolderNames] = explorerFolders[key as FolderNames];
        return newObj;
      }, initFolders);

    for (const key in orderedFolders) {
      result.push(
        <Folder
          key={key as FolderNames}
          folder={explorerFolders[key as FolderNames]}
          name={key as FolderNames}
          onFolderClick={handleFolderClick}
        />
      );
    }
    return result;
  };

  return (
    <ExplorerContainer>
      <StyledHeaderBtn onClick={handleToggle} show={show}>
        VIRTUAL-STORY-CODE
      </StyledHeaderBtn>

      {show && (
        <>
          {folders()}
          {rootFiles.map((rootFile) => {
            return <ExplorerButton key={rootFile.title} {...rootFile} />;
          })}
        </>
      )}
    </ExplorerContainer>
  );
};
