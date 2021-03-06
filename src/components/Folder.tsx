import React, { useState } from "react";
import styled from "styled-components";
import { FolderNames } from "../constants";
import { FolderContent } from "../shared/types";
import { ExplorerButton } from "./ExplorerButton";

interface FolderProps {
  folder: FolderContent;
  name: FolderNames;
  onFolderClick: (value: FolderNames) => void;
}

interface StyledFolder {
  opened: boolean;
  title?: string;
  icon?: unknown;
  url?: string;
  children?: React.ReactNode;
}

const FolderButton = styled.button<StyledFolder>`
  width: 100%;
  background-color: ${(props) =>
    props.opened ? props.theme.palette.buttonFocus : "inherit"};
  border: none;
  line-height: 22px;
  white-space: pre;
  text-decoration: none;
  font-size: 14px;
  text-align: start;
  color: inherit;
  font-family: Segoe WPC, Segoe UI, sans-serif;
  cursor: pointer;
  padding-left: 16px;
  &:before {
    content: url("../../assets/icons/arrow.svg");
    display: inline-block;
    transform: ${(props) => props.opened && "rotate(90deg)"};
    margin-right: 4px;
  }

  &:hover {
    background-color: ${(props) => props.theme.palette.buttonFocus};
  }
`;

interface FolderContents {
  opened: boolean | undefined;
}

const FolderContents = styled.div<FolderContents>`
  display: ${(props) => (props.opened ? "block" : "none")};
`;

export const Folder = ({ folder, name, onFolderClick }: FolderProps) => {
  const handleClick = () => {
    onFolderClick(name);
  };

  return (
    <>
      <FolderButton opened={folder.opened} onClick={handleClick}>
        {name}
      </FolderButton>
      <FolderContents opened={folder.opened}>
        {folder.files?.map((file) => {
          return <ExplorerButton {...file} key={file.title} />;
        })}
      </FolderContents>
    </>
  );
};
