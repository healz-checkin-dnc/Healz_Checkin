import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import CheckinPage from './pages/CheckinPage';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Navigate to="/checkin" replace />} />
        <Route path="/checkin" element={<CheckinPage />} />
      </Routes>
    </ThemeProvider>
  );
}
