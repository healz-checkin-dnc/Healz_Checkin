import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import CheckinPage from './pages/CheckinPage';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CheckinPage />
    </ThemeProvider>
  );
}
