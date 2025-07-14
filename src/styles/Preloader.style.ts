import styled, { keyframes, css } from 'styled-components';

export const ecgAnimation = keyframes`
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

export const ECGContainer = styled.div`
  position: fixed;
  inset: 0;
  background: #010D27;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnimatedPath = styled.path<{ active: boolean }>`
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