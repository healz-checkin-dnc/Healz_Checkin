import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.healzVin}, 0 0 25px ${({ theme }) => theme.colors.healzVin};
  }
  50% {
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.healzPink}, 0 0 35px ${({ theme }) => theme.colors.healzPink};
  }
`;

const shine = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
`;

export const CheckinButton = styled.button`
  background: ${({theme}) => theme.colors.healzPink};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 999px;
  padding: 16px 40px;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;
  max-width: 18.75rem;
  margin: 40px auto 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  transition: all 0.3s ease;
  animation: ${pulse} 3s infinite ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: skewX(-20deg);
    animation: ${shine} 3.2s infinite ease-in-out;
  }

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.15);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.healzPink};
    outline-offset: 4px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    animation: none;
  }

  svg.spinner {
    animation: ${spin} 1s linear infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 14px 24px;
    min-height: 44px;
    max-width: 100%;
  }
`;
