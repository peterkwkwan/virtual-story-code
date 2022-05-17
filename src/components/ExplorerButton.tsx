import React from "react";
import styled from "styled-components";

interface Props {
  selected?: boolean;
  title?: string;
  icon?: unknown;
  url?: string;
}

const StyledButton = styled.button<Props>`
  width: 100%;
  background-color: ${(props) => (props.selected ? "red" : "inherit")};
  border: none;
  color: ${(props) => props.theme.color.text02};
  line-height: 22px;
  white-space: pre;
  text-decoration: none;
  font-size: 13px;
  text-align: start;
  font-family: Segoe WPC, Segoe UI, sans-serif;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.buttonFocus};
  }
`;

export const ExplorerButton = (props: Props) => {
  const { selected, ...rest } = props;

  return (
    <StyledButton selected={selected} {...rest}>
      {rest.title}
    </StyledButton>
  );
};
