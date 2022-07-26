import React from "react";
import styled from "styled-components";
import { Extension } from "./shared/types";

const Container = styled.div`
  display: flex;
  margin-left: 16px;
`;

const Content = styled.div`
  width: calc(100% - 16px - 56px);
  font-size: 13px;
  font-family: sans-serif;
  line-height: 18px;
  padding: 4px 0;
  font-weight: 600;
`;

const Description = styled.p`
  color: ${(props) => props.theme.palette.text02};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  font-weight: 400;
`;

const Author = styled.span`
  font-size: 90%;
`;

export const ExtensionsButton = ({ icon, name, description }: Extension) => {
  return (
    <Container>
      {icon}
      <Content>
        <span>{name}</span>
        <Description>{description}</Description>
        <Author>testing</Author>
      </Content>
    </Container>
  );
};
