import React from "react";
import styled from "styled-components";

interface Props {
  icon: JSX.Element;
  title: string;
  hyperlink: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.a`
  color: ${(props) => props.theme.color.text01};
  cursor: pointer;
  font-size: 13px;
  line-height: 22px;
  margin-right: 6px;
`;

const URL = styled.a`
  color: rgba(204, 204, 204, 0.65);
  font-size: 12px;
  cursor: pointer;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ResultFile = ({ icon, title, hyperlink }: Props) => {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
      <URL>{hyperlink}</URL>
    </Container>
  );
};
