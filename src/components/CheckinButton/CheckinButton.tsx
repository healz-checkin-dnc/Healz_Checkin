import styled from 'styled-components';

export const CheckinButton = styled.button`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.healzPink} 0%, #ff69b4 100%);
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 999px;
  padding: 16px 40px;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;
  max-width: 18.75rem; // 300px
  margin: 40px auto 0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 16px ${({ theme }) => theme.colors.pinkShadow};
  width: 100%; // deixa ocupar 100% do container no mobile

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.15), transparent 70%);
    transform: rotate(45deg);
    transition: opacity 0.4s ease;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 12px 24px;
    max-width: 100%; // libera para preencher container no mobile
  }
`;
