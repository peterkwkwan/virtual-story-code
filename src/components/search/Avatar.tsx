import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const Image = styled.img`
  display: block;
  border-radius: 50%;
  border: 5px solid #5d00ff;
`;

export const Avatar = ({ title }: Props) => {
  return (
    <Image
      src={`../../../public/assets/images/search/${title.toLowerCase()}.png`}
    />
  );
};
