import React from "react";
import styled from "styled-components";
import { AnimatedButton } from "./AnimatedButton";

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

interface Props {
  title: string;
  imgUrl: string;
}

export const Content = ({ title, imgUrl }: Props) => {
  return (
    <Container>
      <AnimatedButton title={title} />
    </Container>
  );
};
