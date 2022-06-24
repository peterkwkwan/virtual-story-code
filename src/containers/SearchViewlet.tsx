import React from "react";
import { SearchContainer } from "../components/search/SearchContainer";
import { SidebarContentHeader } from "../components/SidebarContentHeader";
import { ViewletContainer } from "../shared/styledContainers";

export const SearchViewlet = () => {
  return (
    <ViewletContainer>
      <SidebarContentHeader headerName="search" />
      <SearchContainer />
    </ViewletContainer>
  );
};
