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
    -webkit-font-smoothing: antialiased; /* Chrome, Safari, Edge (macOS) */
    -moz-osx-font-smoothing: grayscale;  /* Firefox (macOS) */
    text-rendering: optimizeLegibility;  /* Melhora ligaturas e kerning */
    font-feature-settings: "liga", "kern"; /* Ajuda a suavizar tipografia */
    line-height: 1.5;
  }
`;
