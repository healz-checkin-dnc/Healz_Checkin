import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

// Animação de onda ECG (desenho da linha da esquerda para a direita e apagamento da esquerda para a direita)
const waveAnimation = keyframes`
  0% {
    stroke-dasharray: 0, 100;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 100;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 100, 100;
    stroke-dashoffset: -100;
  }
`;

// Animação de fade-out para quando a tela for trocada
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Estilo para o contêiner principal do ECG
const ECGContainer = styled.div<{ $fadeOut: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; /* Ocupa 100% da largura da tela */
  height: 100vh; /* Ocupa 100% da altura da tela */
  background-color: #010D27; /* Fundo escuro */
  padding: 0;
  margin: 0;
  opacity: 1;
  animation: ${(props) => (props.$fadeOut ? css`${fadeOut} 1s forwards` : 'none')}; /* Aplica o fade-out quando ativado */
`;

// Estilo para o SVG
const HeartbeatSVG = styled.svg`
  width: 200px;
  stroke: #F33F90; /* Cor rosa */
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

// Estilo para o path com animação de batimento cardíaco
const HeartbeatPath = styled.path`
  stroke-dasharray: 100; /* O comprimento da linha */
  stroke-dashoffset: 100; /* Começa a linha invisível */
  animation: ${waveAnimation} 1s ease-in-out 3; /* A animação ocorre 3 vezes em 1 segundo */
`;

export default function PreloaderPage() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Atraso de 3 segundos para exibir a animação de batimento cardíaco
    const timeout = setTimeout(() => {
      setFadeOut(true);
      // Após o fade-out, redireciona para a tela de Checkin
      setTimeout(() => {
        navigate('/checkin');
      }, 1000); // Duração do fade-out
    }, 3000); // Espera 3 segundos antes de ativar o fade-out

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <ECGContainer $fadeOut={fadeOut}>
      <HeartbeatSVG viewBox="0 0 200 100">
        <HeartbeatPath d="M 0 70 L 20 70 L 30 30 L 40 90 L 50 70 L 70 70" />
      </HeartbeatSVG>
    </ECGContainer>
  );
}
