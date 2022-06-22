import React from "react";
import TypewriterComponent from "typewriter-effect";
import { Icon, TextBox, TextField } from "./shared/styled";

export const SearchField = () => {
  return (
    <TextBox>
      <TextField>
        {" "}
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter.typeString("peter kwan").pauseFor(2500).start();
          }}
        />
      </TextField>
      <Icon
        height={20}
        width={60}
        src="../../../public/assets/icons/search/searchbar-icons.png"
      />
    </TextBox>
  );
};
