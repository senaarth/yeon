import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family};
  }

  html, body, #__next {
    width: 100%;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background-color: ${({ theme }) => theme.colors.rock950};
  }

  h1, h2, h3, h4, h5, h6, p, b {
    color: ${({ theme }) => theme.colors.rock50};
    line-height: ${({ theme }) => theme.font.lineHeight.sm};
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
`;
