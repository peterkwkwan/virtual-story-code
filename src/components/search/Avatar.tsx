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
    props.isHovering && "-5px 0 40px #d6f1db, 5px 0 40px #d5dddd;"};
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
