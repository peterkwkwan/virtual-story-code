import React from "react";
import styled from "styled-components";
import { Icon, TextBox, TextField } from "./shared/styled";

const ReplaceContainer = styled(TextBox)`
  margin-top: 6px;
  border: none;
  width: 242px;
`;
const ReplaceBox = styled(TextField)`
  color: ${(props) => props.theme.color.text02};
`;
export const ReplaceField = () => {
  return (
    <ReplaceContainer>
      <ReplaceBox>Replace</ReplaceBox>
      <Icon
        height={20}
        width={20}
        src="../../../public/assets/icons/search/replace-icon.png"
      />
    </ReplaceContainer>
  );
};
