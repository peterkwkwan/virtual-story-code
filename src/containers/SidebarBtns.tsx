import React from "react";
import styled from "styled-components";
import { StyledLink } from "../components/StyledLink";
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
    path: "explorer",
  },
  {
    title: SidebarOptions.SEARCH,
    src: "../../public/assets/icons/sidebar/search-btn.svg",
    path: "search",
  },
  {
    title: SidebarOptions.GIT,
    src: "../../public/assets/icons/sidebar/git-btn.svg",
    path: "git",
  },
  {
    title: SidebarOptions.EXTENSIONS,
    src: "../../public/assets/icons/sidebar/extensions-btn.svg",
    path: "extensions",
  },
];

export const SidebarBtns = () => {
  return (
    <Sidebar>
      <ButtonUnorderedList>
        {buttons.map((btn) => (
          <StyledLink key={btn.title} path={btn.path}>
            <SidebarButtons key={btn.title}>
              <img src={btn.src} />
            </SidebarButtons>
          </StyledLink>
        ))}
      </ButtonUnorderedList>
    </Sidebar>
  );
};
