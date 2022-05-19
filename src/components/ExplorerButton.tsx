import React from "react";
import styled from "styled-components";
import { useIcon } from "../utils/useGetIconPath";

interface Props {
  title: string;
  selected?: boolean;
  icon?: unknown;
  url?: string;
}

const StyledButton = styled.button<Props>`
  width: 100%;
  background-color: ${(props) => (props.selected ? "red" : "inherit")};
  border: none;
  color: inherit;
  line-height: 22px;
  white-space: pre;
  text-decoration: none;
  font-size: 13px;
  text-align: start;
  font-family: Segoe WPC, Segoe UI, sans-serif;
  cursor: pointer;
  padding-left: 24px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.color.buttonFocus};
  }
`;

export const ExplorerButton = (props: Props) => {
  const { selected, ...rest } = props;

  const iconPath = useIcon(rest.title);

  return (
    <StyledButton selected={selected} {...rest}>
      <img style={{ width: 16, height: 16, marginRight: 4 }} src={iconPath} />
      {rest.title}
    </StyledButton>
  );
};
