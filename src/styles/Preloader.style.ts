import styled, { keyframes } from 'styled-components';

const PATH_LENGTH = 180;

const ecgStroke = keyframes`
  0% {
    stroke-dashoffset: ${PATH_LENGTH};
    opacity: 0.3;
  }
  30% {
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
  height: 100svh;
  background: linear-gradient(130deg, #111111 75%, #7e0741 125%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
`;

export const StyledSvg = styled.svg`
  width: 90vw;
  max-width: 600px;
  height: auto;
  transform: translateX(23%);

  @media (max-width: 600px) {
    transform: translateX(10%);
    max-width: 90vw;
  }
`;

export const AnimatedPath = styled.path`
  stroke: #f33f90;
  stroke-width: 3;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: ${PATH_LENGTH};
  stroke-dashoffset: ${PATH_LENGTH};
  animation: ${ecgStroke} 2s ease-in-out infinite;
`;
