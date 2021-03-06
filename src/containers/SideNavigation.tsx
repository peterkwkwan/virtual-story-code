import React from "react";
import { useLocation } from "react-router-dom";
import { ExplorerViewlet } from "./Viewlets/ExplorerViewlet";
import { ExtensionsViewlet } from "./Viewlets/ExtensionsViewlet";
import { SearchViewlet } from "./Viewlets/SearchViewlet";
import { SidebarBtns } from "./SidebarBtns";

const SidebarConfigs = {
  ["explorer"]: <ExplorerViewlet />,
  ["search"]: <SearchViewlet />,
  ["extensions"]: <ExtensionsViewlet />,
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
