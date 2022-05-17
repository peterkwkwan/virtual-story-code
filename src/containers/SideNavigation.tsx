import React from "react";
import styled from "styled-components";

const Sidebar = styled.aside`
  background-color: ${(props) => props.theme.color.dark02};
  height: 100%;
  width: 48px;
`;

const Explorer = styled.aside`
  background-color: ${(props) => props.theme.color.dark03};
  height: 100%;
  width: 300p;
`;

const SideNavigation = () => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar />
      <Explorer>
        <h1>explorer</h1>
      </Explorer>
    </div>
  );
};

export { SideNavigation };
