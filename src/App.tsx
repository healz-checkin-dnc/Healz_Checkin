import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CheckinPage from './pages/CheckinPage';
import Preloader from './components/Preloader/Preloader';

export function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handlePreloaderFinish = () => {
    setLoading(false);
    navigate('/checkin'); // redireciona após o preloader
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {loading ? (
        <Preloader onFinish={handlePreloaderFinish} />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/checkin" />} />
          <Route path="/checkin" element={<CheckinPage />} />
        </Routes>
      )}
    </ThemeProvider>
  );
}
