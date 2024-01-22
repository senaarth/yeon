import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      rock50: string;
      rock300: string;
      rock600: string;
      rock700: string;
      rock950: string;

      yeon500: string;
      yeon600: string;
    };
    font: {
      family: string;
      size: {
        nano: number;
        xxxs: number;
        xxs: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
        xxxl: number;
      };
      weight: {
        regular: string;
        semibold: string;
        bold: string;
      };
      lineHeight: {
        sm: string;
        md: string;
        lg: string;
      };
    };
  }
}
