export const theme = {
  colors: {
    greyLight: '#F9F9F9',
    white: '#FFFFFF',
    blueDark: '#010D27',
    healzPink: '#F33F90',
    pinkShadow: '#EDC0D5',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
  },
  fonts: {
    main: "Helvetica Now Display, sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  }
};

export type ThemeType = typeof theme;
