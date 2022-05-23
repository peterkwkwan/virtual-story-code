import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  contributors: React.ReactNode;
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${(props) => props.theme.color.dark01};
  color: ${(props) => props.theme.color.text01};
`;

const LineNumbers = styled.aside`
  margin-top: 20px;
  width: 66px;
  height: calc(100% - 20px);
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      direction: rtl;
      text-align: right;
      width: 32px;
      font-family: Menlo, Monaco, "Courier New", monospace;
      line-height: 18px;
      letter-spacing: 0px;
      font-size: 12px;
      color: ${(props) => props.theme.color.lineNumberText};
    }
  }
`;

const Contributors = styled.div`
  height: 20px;
  line-height: 15px;
  font-size: 11px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.contributors};
`;

const lineNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const ExplorerWrapper = ({ children, contributors }: Props) => {
  return (
    <StyledContainer>
      <LineNumbers>
        <ul>
          {lineNumbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </LineNumbers>
      <div style={{ height: "100%" }}>
        <Contributors>Peter Kwan, {contributors}</Contributors>
        {children}
      </div>
    </StyledContainer>
  );
};
