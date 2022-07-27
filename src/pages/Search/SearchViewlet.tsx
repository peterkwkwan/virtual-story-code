import React from "react";
import { ViewletHeader } from "../../components/ui/ViewletHeader";
import { ViewletContainer } from "../shared/styledContainers";
import { SearchContainer } from "./SearchContainer";

export const SearchViewlet = () => {
  return (
    <ViewletContainer>
      <ViewletHeader headerName="search" />
      <SearchContainer />
    </ViewletContainer>
  );
};
