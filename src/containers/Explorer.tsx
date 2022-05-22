import React, { useState } from "react";
import styled from "styled-components";
import { Folder } from "../components/Folder";
import { FolderNames, IFolderStructure } from "../shared/types";

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
    content: url("../../public/assets/icons/arrow.svg");
    display: inline-block;
    transform: ${(props) => props.show && "rotate(90deg)"};
    margin-right: 4px;
  }
`;

const initFolders: IFolderStructure = {
  [FolderNames.NODE_MODULES]: {
    opened: false,
  },
  [FolderNames.CAREER]: {
    opened: true,
    files: [
      { title: "Serai.tsx", url: "serai" },
      { title: "PAG.tsx", url: "pag" },
      { title: "Manulife.tsx", url: "manulife" },
      { title: "Acuris.scss", url: "acuris" },
      { title: "Coleman.scss", url: "coleman" },
      { title: "CathayDragon.test", url: "cathay" },
    ],
  },
  [FolderNames.EDUCATION]: {
    opened: true,
    files: [
      { title: "McGill.html", url: "mcgill" },
      { title: "HKU.html", url: "HKU" },
      { title: "BurnabyNorth.md", url: "bbynorth" },
    ],
  },
};

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

      {show && folders()}
    </ExplorerContainer>
  );
};
