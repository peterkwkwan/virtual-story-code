import React from "react";

interface Props {
  icon: string;
  title: string;
}
export const ResultFile = ({ icon, title }: Props) => {
  return <div>{title}</div>;
};
