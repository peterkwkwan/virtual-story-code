import React from "react";
import { Explorer } from "./Explorer";
import { SidebarBtnContainer } from "./SidebarBtnContainer";

const SideNavigation = () => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <SidebarBtnContainer />
      <Explorer />
    </div>
  );
};

export { SideNavigation };
