import styled from 'styled-components';

// Contêiner do Header
export const HeaderContainer = styled.header`
  width: 100%; /* Garante que o Header ocupe 100% da largura */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.blueDark};
  box-sizing: border-box;  /* Garante que o padding não afete a largura total */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.sm};
    gap: 8px; /* Adiciona um pequeno espaçamento entre os elementos */
  }
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;  /* Garante que a logo tenha tamanho proporcional */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 30px;  /* Ajusta o tamanho da logo para telas menores */
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
    font-size: 2rem;  /* Ajuste do tamanho da fonte para tablets */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;  /* Ajuste do tamanho da fonte para dispositivos móveis */
  }
`;

export const RightSpace = styled.div`
  width: 2.5rem;  /* Espaço à direita do título */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;  /* Oculta o espaço à direita em telas pequenas */
  }
`;
