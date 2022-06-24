import React from "react";
import { ExtensionsContainer } from "../../components/extensions/ExtensionsContainer";
import { ViewletContainer } from "../../shared/styledContainers";
import { ViewletHeader } from "./ViewletHeader";

export const ExtensionsViewlet = () => {
  return (
    <ViewletContainer>
      <ViewletHeader headerName="extensions: marketplace" />
      <ExtensionsContainer />
    </ViewletContainer>
  );
};
