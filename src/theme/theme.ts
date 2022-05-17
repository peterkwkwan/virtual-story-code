interface Theme {
  color: Record<string, string>;
}

const theme: Theme = {
  color: {
    dark01: "#1e1e1e",
    dark02: "rgb(51, 51, 51)",
    dark03: "#252526",
    dark04: "rgb(60, 60, 60)",

    text01: "rgb(204, 204, 204)",
    text02: "rgba(204, 204, 204, 0.5)",

    constColor: "#569cd6",
    objectColor: "#4fc1ff",
    exportColor: "#c586c0",
    typeColor: "#4ec9b0",
    propertyColor: "#9cdcfe",
    stringColor: "#ce9178",
    variableColor: "#dcdcaa",
  },
};

export { theme };
