import React from "react";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";

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
  border: ${(props) => "1px solid " + props.theme.color.selectedBlueBorder};
`;

const TextField = styled.div`
  font-size: 13px;
  cursor: text;
  font-family: SF-Pro, sans-serif;
  line-height: 18px;
  letter-spacing: 0.3px;
`;

const Icon = styled.img`
  height: 20px;
  width: 60px;
  padding: 0 4px 0 0;
`;

export const Searchbox = () => {
  return (
    <Container>
      <TextBox>
        <TextField>
          {" "}
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.typeString("peter kwan").pauseFor(2500).start();
            }}
          />
        </TextField>
        <Icon src="../../../public/assets/icons/searchbar-icons.png" />
      </TextBox>
    </Container>
  );
};
