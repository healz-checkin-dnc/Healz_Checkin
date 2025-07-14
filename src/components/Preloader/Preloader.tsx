// src/components/ECGWaveRepeat.tsx
import { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const ecgAnimation = keyframes`
  0% {
    stroke-dashoffset: 800;
    opacity: 0.3;
  }
  40% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  70% {
    stroke-dashoffset: 800;
    opacity: 0.6;
  }
  100% {
    stroke-dashoffset: 800;
    opacity: 0.3;
  }
`;

const ECGContainer = styled.div`
  position: fixed;
  inset: 0;
  background: #010D27;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimatedPath = styled.path<{ active: boolean }>`
  stroke: #F33F90;
  stroke-width: 4;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  ${({ active }) =>
    active &&
    css`
      animation: ${ecgAnimation} 2s ease-in-out forwards;
    `}
`;

export default function ECGWaveRepeat() {
  const [cycles, setCycles] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (cycles < 3) {
      setActive(true);
      const timeout = setTimeout(() => {
        setActive(false); // pausa
        setCycles((prev) => prev + 1);
      }, 2000); // duração da animação
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