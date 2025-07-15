import { useEffect, useState } from 'react';
import {
  ECGContainer,
  AnimatedPath,
} from "../../styles/Preloader.style";

type PreloaderProps = {
  onFinish: () => void;
};

export default function Preloader({ onFinish }: PreloaderProps) {
  const [cycles, setCycles] = useState(0);
  const [active, setActive] = useState(true);
  const [visible, setVisible] = useState(true); // controla o fade

  useEffect(() => {
    if (cycles < 1) {
      setActive(true);
      const timeout = setTimeout(() => {
        setActive(false);
        setCycles((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    } else {
      setVisible(false); // inicia fade-out
      const timeout = setTimeout(() => {
        onFinish(); // só finaliza após o fade-out
      }, 1000); // tempo da transição
      return () => clearTimeout(timeout);
    }
  }, [cycles, onFinish]);

  return (
    <ECGContainer isVisible={visible}>
      <svg viewBox="0 0 180 80" width="320">
        <AnimatedPath
          active={active}
          d="M0,40 H20 L30,20 L40,60 L50,10 L60,40 L70,30 L80,40 H100"
        />
      </svg>
    </ECGContainer>
  );
}
