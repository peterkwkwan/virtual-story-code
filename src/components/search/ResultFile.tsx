import React from "react";
import styled from "styled-components";

interface Props {
  icon: JSX.Element;
  title: string;
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
`;

export const ResultFile = ({ icon, title }: Props) => {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
      <URL>test</URL>
    </Container>
  );
};
