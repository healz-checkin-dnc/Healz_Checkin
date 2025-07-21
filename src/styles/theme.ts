export const theme = {
  colors: {
    white: '#FFFFFF',
    grayLight: '#F9F9F9',
    blueDark: '#010D27',
    healzPink: '#F33F90',
    pinkShadow: '#EDC0D5',
    footerInfo: '#666',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
  },
  fonts: {
    main: 'Helvetica Now Display, sans-serif',
  },
  fontSizes: {
    xs: '0.75rem', 
    sm: '0.875rem', 
    md: '1rem', 
    lg: '1.25rem', 
    xl: '2rem', 
    xxl: '3rem',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
  },
} as const;

export type ThemeType = typeof theme;
