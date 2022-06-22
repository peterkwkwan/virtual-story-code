import React from "react";
import { useLocation } from "react-router-dom";
import { Explorer } from "./Explorer";
import { Searchbar } from "./Searchbar";
import { SidebarBtns } from "./SidebarBtns";

const SidebarConfigs = {
  ["explorer"]: <Explorer />,
  ["search"]: <Searchbar />,
};

const SideNavigation = () => {
  const { pathname } = useLocation();

  const renderSidebarContent = () => {
    const navigationKey = pathname.split("/")[1] as keyof typeof SidebarConfigs;
    return SidebarConfigs[navigationKey];
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <SidebarBtns />
      {renderSidebarContent()}
    </div>
  );
};

export { SideNavigation };
