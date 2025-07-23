import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(100deg, #111111 50%, #7e0741 140%);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.sm};
    gap: 8px;
  }
`;

export const Logo = styled.img`
  max-height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-height: 30px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.main};
  line-height: 1.5;
  text-align: center;
  margin: auto;
`;
