import React from "react";
import styled from "styled-components";
import { Icon, TextBox, TextField } from "./shared/styled";

const ReplaceContainer = styled(TextBox)`
  margin: 6px 4px 0 20px;
  border: none;
  width: 242px;
`;
const ReplaceBox = styled(TextField)`
  color: ${(props) => props.theme.palette.text03};
`;
export const ReplaceField = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <ReplaceContainer>
        <ReplaceBox>Replace</ReplaceBox>
        <Icon
          height={20}
          width={20}
          src="../../../public/assets/icons/search/replace-icon.png"
        />
      </ReplaceContainer>
      <Icon
        height={20}
        width={20}
        // style={{ position: "relative", left: 4 }}
        src="../../../public/assets/icons/search/replace-icon2.png"
      />
    </div>
  );
};
