import React from "react";
import { Searchbox } from "../components/search/Searchbox";
import { SidebarContentHeader } from "../components/SidebarContentHeader";
import { SidebarContentContainer } from "../shared/styledContainers";

export const Searchbar = () => {
  return (
    <SidebarContentContainer>
      <SidebarContentHeader headerName="search" />
      <Searchbox />
    </SidebarContentContainer>
  );
};
