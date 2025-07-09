import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import CheckinPage from './pages/CheckinPage';
import Preloader from './components/Preloader'; // importamos o loader aqui

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // tempo do loader em milissegundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {loading ? <Preloader /> : <CheckinPage />}
    </ThemeProvider>
  );
}
