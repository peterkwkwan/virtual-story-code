import React from "react";
import { SearchContainer } from "../../components/search/SearchContainer";
import { ViewletHeader } from "./ViewletHeader";
import { ViewletContainer } from "../../shared/styledContainers";

export const SearchViewlet = () => {
  return (
    <ViewletContainer>
      <ViewletHeader headerName="search" />
      <SearchContainer />
    </ViewletContainer>
  );
};
