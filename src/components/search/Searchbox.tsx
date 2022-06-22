import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 12px 0 20px;
`;

const TextBox = styled.div`
  background-color: ${(props) => props.theme.color.dark04};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  padding-left: 4px;
`;

const TextField = styled.div`
  font-size: 13px;
  cursor: text;
  font-family: SF-Pro, sans-serif;
  line-height: 18px;
  letter-spacing: 0.3px;
`;

export const Searchbox = () => {
  return (
    <Container>
      <TextBox>
        <TextField>peter kwan</TextField>
      </TextBox>
    </Container>
  );
};
