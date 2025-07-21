import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.main}, sans-serif;
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility; 
    font-feature-settings: "liga", "kern"; 
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.grayLight};
    color: ${({ theme }) => theme.colors.blueDark};
  }

  a {
    color: ${({ theme }) => theme.colors.healzPink};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.pinkShadow};
      outline: none;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
