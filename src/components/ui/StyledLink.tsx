import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledLink = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  return <CustomLink to={path}>{children}</CustomLink>;
};
