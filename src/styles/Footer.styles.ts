import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};

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
`;

// div para o icones
export const SocialItem = styled.li``;

export const IconWrapper = styled.a`
  background-color: ${({ theme }) => theme.colors.healzPink};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  padding: 8px;
  display: flex;
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
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.footerInfo};
  margin-top: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const CopyrightBar = styled.div`
  background: linear-gradient(130deg, #111111 50%, #7e0741 100%);
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
