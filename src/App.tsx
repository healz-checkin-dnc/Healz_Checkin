import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import CheckinPage from './pages/CheckinPage';
import Preloader from './components/Preloader/Preloader';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {loading ? <Preloader /> : <CheckinPage />}
    </ThemeProvider>
  );
}
