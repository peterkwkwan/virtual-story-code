import React, { useState } from "react";
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
  hyperlink: string;
}

export const Content = (props: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleIsHovering = (hovering: boolean) => {
    setIsHovering(hovering);
  };

  return (
    <Container>
      <Avatar title={props.title} isHovering={isHovering} />
      <AnimatedButton {...props} handleIsHovering={handleIsHovering} />
    </Container>
  );
};
