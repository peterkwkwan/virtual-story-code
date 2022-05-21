import React from "react";
import styled from "styled-components";

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
    title: "Explorer",
    src: "../../public/assets/icons/explorer-sidebar-icon.svg",
  },
  {
    title: "Explorer",
    src: "../../public/assets/icons/explorer-sidebar-icon.svg",
  },
  {
    title: "Explorer",
    src: "../../public/assets/icons/explorer-sidebar-icon.svg",
  },
];

export const SidebarBtnContainer = () => {
  return (
    <Sidebar>
      <ButtonUnorderedList>
        {buttons.map((btn) => (
          <SidebarButtons>
            <img src={btn.src} />
          </SidebarButtons>
        ))}
      </ButtonUnorderedList>
    </Sidebar>
  );
};
