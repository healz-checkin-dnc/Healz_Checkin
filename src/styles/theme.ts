export const theme = {
  colors: {
    white: '#FFFFFF',
    grayLight: '#F9F9F9',
    blueDark: '#010D27',
    healzPink: '#f20775',
    pinkShadow: '#EDC0D5',
    footerInfo: '#666666',
    healzBlack: '#111111',
    healzVin: '#7c0741'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
  },
  fonts: {
    main: '"Helvetica Now Display", sans-serif',
  },
  fontSizes: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    md: '1rem',      // 16px (base)
    lg: '1.25rem',   // 20px
    xl: '2rem',      // 32px
    xxl: '3rem',     // 48px
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
  },
} as const;

export type ThemeType = typeof theme;
