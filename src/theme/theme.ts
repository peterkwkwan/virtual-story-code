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

    constText: "#569cd6",
    objectText: "#4fc1ff",
    exportText: "#c586c0",
    typeText: "#4ec9b0",
    propertyText: "#9cdcfe",
    stringText: "#ce9178",
    variableText: "#dcdcaa",

    buttonFocus: 'rgba(193, 192, 192, 0.05)'
  },
};

export { theme };
