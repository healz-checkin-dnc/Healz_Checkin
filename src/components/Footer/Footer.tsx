import React from 'react';
import styled from 'styled-components';
import darkLogo from '../../assets/darkLogo.svg';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

// Container principal do footer
const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.greyLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SocialItem = styled.li``;

const IconWrapper = styled.a`
  background-color: ${({ theme }) => theme.colors.healzPink};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, opacity 0.2s;

  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const InfoText = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }
`;

const CopyrightBar = styled.div`
  background-color: ${({ theme }) => theme.colors.healzPink};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 0.875rem;
  padding: ${({ theme }) => theme.spacing.sm};
  margin-top: 1rem;
`;

// Componente principal
export default function Footer() {
  return (
    <>
      <FooterContainer>
        <div>
          <Logo src={darkLogo} alt="Healz Logo" />
          <InfoText>
            contato@healz.com.br<br />
            Atendimento: Seg a Sex, 9h - 18h
          </InfoText>
        </div>

        <nav aria-label="Redes sociais da Healz">
          <SocialList>
            <SocialItem>
              <IconWrapper
                href="https://www.linkedin.com"
                aria-label="Linkedin da Healz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </IconWrapper>
            </SocialItem>
            <SocialItem>
              <IconWrapper
                href="https://www.instagram.com/vannucci.021/"
                aria-label="Instagram da Healz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </IconWrapper>
            </SocialItem>
            <SocialItem>
              <IconWrapper
                href="https://wa.me/5521994686556"
                aria-label="WhatsApp da Healz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </IconWrapper>
            </SocialItem>
          </SocialList>
        </nav>
      </FooterContainer>

      <CopyrightBar>
        © 2025. Todos os direitos reservados Healz.
      </CopyrightBar>
    </>
  );
}
