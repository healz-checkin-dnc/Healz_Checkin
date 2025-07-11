import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.blueDark};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.sm};
    gap: 8px;
  }
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;

  @media (max-width: 480px) {
    height: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.main};
  line-height: 1.5;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const RightSpace = styled.div`
  width: 2.5rem;

  @media (max-width: 480px) {
    display: none; // Remove no mobile pra não ocupar espaço
  }
`;
