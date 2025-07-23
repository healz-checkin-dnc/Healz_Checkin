import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import CheckinPage from './pages/CheckinPage';
import Preloader from './components/Preloader/Preloader';
import { AnimatePresence, motion } from 'framer-motion';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed', // FIXED para cobrir tudo e fixar na viewport
              top: 0,
              left: 0,
              width: '100vw',
              height: '100svh',
              zIndex: 99999, // garantir que fique por cima de tudo
              overflow: 'hidden',
            }}
          >
            <Preloader />
          </motion.div>
        ) : (
          <motion.div
            key="checkin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'relative' }}
          >
            <CheckinPage />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
