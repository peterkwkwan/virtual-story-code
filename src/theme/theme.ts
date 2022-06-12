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
    lineNumberText: "#858585",
    contributors: "#999",

    darkBlueText: "#569cd6",
    blueText: "#4fc1ff",
    purpleText: "#c586c0",
    greenText: "#4ec9b0",
    mutedGreenText: "#b5cea8",
    lightBlueText: "#9cdcfe",
    stringText: "#ce9178",
    lightYellowText: "#dcdcaa",
    yellowText: '#D7BA7D',
    yellowBrackets: '#ffd700',

    buttonFocus: "rgba(193, 192, 192, 0.05)",
  },
};

export { theme };
