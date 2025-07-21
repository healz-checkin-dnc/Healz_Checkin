import styled, { keyframes, css } from 'styled-components';

const PATH_LENGTH = 180;

export const ecgAnimation = keyframes`
  0% {
    stroke-dashoffset: ${PATH_LENGTH};
    opacity: 0.3;
  }
  40% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  70% {
    stroke-dashoffset: ${PATH_LENGTH};
    opacity: 0.6;
  }
  100% {
    stroke-dashoffset: ${PATH_LENGTH};
    opacity: 0.3;
  }
`;

export const ECGContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.blueDark || '#001f3f'};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const AnimatedPath = styled.path<{ active: boolean }>`
  stroke: #F33F90;
  stroke-width: 4;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: ${PATH_LENGTH};
  stroke-dashoffset: ${PATH_LENGTH};
  opacity: 0.3;

  ${({ active }) =>
    active &&
    css`
      animation: ${ecgAnimation} 2s ease-in-out infinite;
    `}
`;
