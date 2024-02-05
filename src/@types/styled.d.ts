import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      rock50: string;
      rock300: string;
      rock600: string;
      rock700: string;
      rock900: string;
      rock950: string;

      yeon500: string;
      yeon600: string;
    };
    font: {
      family: string;
      size: {
        nano: string;
        xxxs: string;
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        xxxl: string;
      };
      weight: {
        regular: string;
        semibold: string;
        bold: string;
      };
      lineHeight: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
      };
    };
  }
}
