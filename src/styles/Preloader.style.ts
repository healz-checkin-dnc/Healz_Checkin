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
  z-index: 9999;
  background: linear-gradient(
    130deg,
    ${({ theme }) => theme.colors.healzBlack} 70%,
    ${({ theme }) => theme.colors.healzVin} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ECGWrapper = styled.div`
  transform: translateX(30px); // move o símbolo para a direita
  width: 300px;
  height: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    transform: translateX(10px);
    width: 200px;
    height: 80px;
  }
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
