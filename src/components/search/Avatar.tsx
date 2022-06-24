import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  isHovering: boolean;
}

interface ImgProps {
  isHovering: boolean;
}

const Image = styled.img<ImgProps>`
  display: block;
  border-radius: 50%;
  border: 5px solid #5d00ff;
  box-shadow: ${(props) =>
    props.isHovering &&
    "inset 0 0 50px #fff, inset 20px 0 80px #f0f,inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;"};
  transition: 1s;
`;

export const Avatar = ({ title, isHovering }: Props) => {
  return (
    <Image
      isHovering={isHovering}
      src={`../../../public/assets/images/search/${title.toLowerCase()}.png`}
    />
  );
};
