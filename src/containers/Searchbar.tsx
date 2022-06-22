import React from "react";
import { SearchContainer } from "../components/search/SearchContainer";
import { SidebarContentHeader } from "../components/SidebarContentHeader";
import { SidebarContentContainer } from "../shared/styledContainers";

export const Searchbar = () => {
  return (
    <SidebarContentContainer>
      <SidebarContentHeader headerName="search" />
      <SearchContainer />
    </SidebarContentContainer>
  );
};
