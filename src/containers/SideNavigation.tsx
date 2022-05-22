import React from "react";
import { Explorer } from "./Explorer";
import { SidebarBtns } from "./SidebarBtns";

const SideNavigation = () => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <SidebarBtns />
      <Explorer />
    </div>
  );
};

export { SideNavigation };
