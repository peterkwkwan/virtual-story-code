import React from "react";
import styled from "styled-components";
import { SidebarOptions } from "../shared/types";

const Sidebar = styled.aside`
  background-color: ${(props) => props.theme.color.dark02};
  height: 100%;
  width: 48px;
`;

const ButtonUnorderedList = styled.ul`
  margin: 0;
  padding: 4px 0 0;
`;

const SidebarButtons = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  width: 48px;
  height: 48px;
`;

const buttons = [
  {
    title: SidebarOptions.EXPLORER,
    src: "../../public/assets/icons/sidebar/explorer-btn.svg",
  },
  {
    title: SidebarOptions.SEARCH,
    src: "../../public/assets/icons/sidebar/search-btn.svg",
  },
  {
    title: SidebarOptions.GIT,
    src: "../../public/assets/icons/sidebar/git-btn.svg",
  },
  {
    title: SidebarOptions.EXTENSIONS,
    src: "../../public/assets/icons/sidebar/extensions-btn.svg",
  },
];

export const SidebarBtns = () => {
  return (
    <Sidebar>
      <ButtonUnorderedList>
        {buttons.map((btn) => (
          <SidebarButtons key={btn.title}>
            <img src={btn.src} />
          </SidebarButtons>
        ))}
      </ButtonUnorderedList>
    </Sidebar>
  );
};
