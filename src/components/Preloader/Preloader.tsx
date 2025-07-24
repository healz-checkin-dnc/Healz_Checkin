// ECGWaveRepeat.tsx
import { useEffect, useState } from 'react';
import { ECGContainer, AnimatedPath } from '../../styles/Preloader.style'; // Importando os estilos

export default function ECGWaveRepeat() {
  const [cycles, setCycles] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (cycles < 3) {
      setActive(true);
      const timeout = setTimeout(() => {
        setActive(false); // Pausa
        setCycles((prev) => prev + 1);
      }, 3000); // Duração da animação
      return () => clearTimeout(timeout);
    }
  }, [cycles]);

  return (
    <ECGContainer>
      <svg viewBox="0 0 180 80" width="320">
        <AnimatedPath
          active={active}
          d="M0,40 H20 L30,20 L40,60 L50,10 L60,40 L70,30 L80,40 H100"
        />
      </svg>
    </ECGContainer>
  );
}
