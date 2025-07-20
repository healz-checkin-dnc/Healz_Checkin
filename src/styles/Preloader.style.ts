import styled, { keyframes, css } from 'styled-components';

export const ecgAnimation = keyframes`
  0% {
    stroke-dashoffset: 800;
    opacity: 1;  /* Inicia com opacidade 1 */
  }
  40% {
    stroke-dashoffset: 0;
    opacity: 1;  /* No meio da animação, ainda visível */
  }
  70% {
    stroke-dashoffset: 800;
    opacity: 1;  /* Finaliza com opacidade ainda visível */
  }
  100% {
    stroke-dashoffset: 800;
    opacity: 0;  /* Fade-out, a opacidade chega a 0 */
  }
`;

export const ECGContainer = styled.div`
  position: fixed;
  inset: 0;
  background: #010D27;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnimatedPath = styled.path<{ active: boolean; fadeOut: boolean }>`
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
      animation: ${ecgAnimation} 3s ease-in-out forwards; /* Animação durando 3 segundos */
    `}

  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0; /* Controla o fade-out */
      transition: opacity 2s ease-out; /* Transition suave para fade-out */
    `}
`;
