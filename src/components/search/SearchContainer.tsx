import React from "react";
import styled from "styled-components";
import { ReplaceField } from "./ReplaceField";
import { SearchField } from "./SearchField";

const Container = styled.div`
  margin: 0 12px 0 20px;
`;

export const SearchContainer = () => {
  return (
    <Container>
      <SearchField />
      <ReplaceField />
    </Container>
  );
};
