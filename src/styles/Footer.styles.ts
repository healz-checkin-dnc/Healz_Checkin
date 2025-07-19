import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;  /* Garante que o footer ocupe 100% da largura da tela */
  background-color: ${({ theme }) => theme.colors.grayLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  box-sizing: border-box;  /* Para garantir que o padding não afete a largura total */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const Logo = styled.img`
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 30px;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const SocialList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SocialItem = styled.li``;

export const IconWrapper = styled.a`
  background-color: ${({ theme }) => theme.colors.healzPink};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition:
    transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
    opacity: 0.9;
    outline: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const InfoText = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.footerInfo};
  margin-top: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }
`;

export const CopyrightBar = styled.div`
  width: 100%; /* Garantir que a barra de copyright ocupe a largura toda */
  background-color: ${({ theme }) => theme.colors.healzPink};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 0.875rem;
  padding: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
  box-sizing: border-box;  /* Garantir que o padding não afete a largura total */
`;
