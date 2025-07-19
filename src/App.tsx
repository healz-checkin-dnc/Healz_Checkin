import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';  
import { GlobalStyle } from './styles/GlobalStyle';  
import { Routes, Route } from 'react-router-dom'; 
import CheckinPage from './pages/CheckinPage';
import PreloaderPage from './pages/PreloaderPage';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        {/* Rota inicial que renderiza a animação de batimento cardíaco */}
        <Route path="/" element={<PreloaderPage />} />
        {/* Rota para a página de Check-in */}
        <Route path="/checkin" element={<CheckinPage />} />
      </Routes>
    </ThemeProvider>
  );
}
