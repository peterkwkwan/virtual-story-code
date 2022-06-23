import React from "react";

interface Props {
  icon: JSX.Element;
  title: string;
}
export const ResultFile = ({ icon, title }: Props) => {
  return (
    <div>
      {icon}
      {title}
    </div>
  );
};
