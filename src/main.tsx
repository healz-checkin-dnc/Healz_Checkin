import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';

<ThemeProvider theme={theme}>
  <GlobalStyle />
</ThemeProvider>
