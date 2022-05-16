import React from "react";
import styled from "styled-components";

const navOptions = [
  { name: "File" },
  { name: "Edit" },
  { name: "Selection" },
  { name: "View" },
  { name: "Go" },
  { name: "Run" },
  { name: "Terminal" },
  { name: "Help" },
];

const StyledNavigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.dark02};
  color: ${(props) => props.theme.color.text};
  font-weight: 500;
  width: 100vw;
  font-family: sans-serif;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  li {
    margin-right: 16px;
    align-self: center;
  }
`;

const TopNavigation = () => {
  return (
    <StyledNavigation>
      <StyledList>
        {navOptions.map((option) => (
          <li key={option.name}>{option.name}</li>
        ))}
      </StyledList>
      <p style={{ position: "fixed", left: "50%", margin: 0 }}>current file</p>
      <div>buttons</div>
    </StyledNavigation>
  );
};

export { TopNavigation };
