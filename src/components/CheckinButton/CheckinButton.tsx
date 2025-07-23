import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const CheckinButton = styled.button`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.healzPink} 0%, #ff69b4 100%);
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 999px;
  padding: 16px 40px;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;
  max-width: 18.75rem; /* 300px */
  margin: 40px auto 0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 16px ${({ theme }) => theme.colors.pinkShadow};
  width: 100%;

  &::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  transform: rotate(25deg);
  transition: opacity 0.4s ease, transform 0.4s ease;
  opacity: 0;
  pointer-events: none;
}

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 22px ${({ theme }) => theme.colors.pinkShadow};

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px ${({ theme }) => theme.colors.pinkShadow};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.healzPink};
    outline-offset: 4px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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
