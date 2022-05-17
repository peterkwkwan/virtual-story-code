import React from "react";
import styled from "styled-components";
import { ExplorerButton } from "../components/ExplorerButton";

const Sidebar = styled.aside`
  background-color: ${(props) => props.theme.color.dark02};
  height: 100%;
  width: 48px;
`;

const Explorer = styled.aside`
  background-color: ${(props) => props.theme.color.dark03};
  height: 100%;
  width: 300px;
`;

const explorerBtns = [
  { title: "src" },
  { title: "about.tsx" },
  { title: "jobs" },
  { title: "Serai.tsx" },
  { title: "PAG.tsx" },
  { title: "Manulife.tsx" },
  { title: "Acuris.tsx" },
  { title: "Coleman.tsx" },
  { title: "education" },
  { title: "README.md" },
];

const SideNavigation = () => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar />
      <Explorer>
        <h6>VIRTUAL-STORY-CODE</h6>
        <img src="../../public/assets/icons/reactts.svg" />
        {explorerBtns.map((btns) => (
          <ExplorerButton title={btns.title} />
        ))}
      </Explorer>
    </div>
  );
};

export { SideNavigation };
