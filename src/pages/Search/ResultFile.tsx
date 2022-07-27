import React from "react";
import styled from "styled-components";

interface Props {
  icon: JSX.Element;
  title: string;
  hyperlink: string;
}

const Container = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: calc(100% - 20px);
  padding-left: 20px;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.palette.buttonFocus};
  }
`;

const Title = styled.p`
  color: ${(props) => props.theme.palette.text01};
  font-size: 13px;
  line-height: 22px;
  margin: 0 6px 0 0;
`;

const URL = styled.p`
  color: rgba(204, 204, 204, 0.65);
  font-size: 12px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const ResultFile = ({ icon, title, hyperlink }: Props) => {
  return (
    <Container href={hyperlink} target="_blank">
      {icon}
      <Title>{title}</Title>
      <URL>{hyperlink}</URL>
    </Container>
  );
};
