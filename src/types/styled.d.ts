import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      dark01: string;
      dark02: string;
      dark03: string;
      dark04: string;

      text01: string;
      text02: string;
      text03: string;
      text04: string;

      contributors: string;
      selectedBlueBorder: string;

      lightBlueText: string;
      blueText: string;
      darkBlueText: string;
      greenText: string;
      commentGreen: string;
      mutedGreenText: string;
      lightYellowText: string;
      yellowText: string;
      yellowBrackets: string;
      stringText: string;
      purpleText: string;
      lineNumberText: string;
      angleBrackets: string;

      grey: string;
    };
  }
}
