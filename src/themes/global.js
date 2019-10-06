import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    width: 100wv;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    justify-content: center;
    text-rendering: optimizeLegibility;
    #root {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .error {
        border-color: red;
        background-color: #ffe2e7;
      }
    }
  }`;
