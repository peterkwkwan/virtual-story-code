import React from "react";
import styled from "styled-components";

export const TextField = styled.input`
  color: ${(props) => props.theme.color.text01};
  background-color: ${(props) => props.theme.color.dark04};
  height: 24px;
  width: calc(100% - 18px - 20px);
  margin: 0 12px 0 20px;
  outline: none;
  border: 1px solid transparent;
  ::placeholder {
    color: ${(props) => props.theme.color.text02};
  }
  :focus {
    border: ${(props) => "1px solid " + props.theme.color.selectedBlueBorder};
  }
`;

export const ExtensionsSearchBox = () => {
  return <TextField placeholder="Search Skills in Marketplace" />;
};
