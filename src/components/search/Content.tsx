import React from "react";
import styled from "styled-components";
import { AnimatedButton } from "./AnimatedButton";
import { Avatar } from "./Avatar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

interface Props {
  title: string;
  imgUrl: string;
}

export const Content = ({ title, imgUrl }: Props) => {
  return (
    <Container>
      <Avatar title={title} />
      <AnimatedButton title={title} />
    </Container>
  );
};
