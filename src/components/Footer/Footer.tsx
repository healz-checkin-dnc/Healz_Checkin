import React from 'react';
import styled from 'styled-components';
import darkLogo from '../../assets/darkLogo.svg';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.greyLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 40px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const IconWrapper = styled.a`
  background-color: ${({ theme }) => theme.colors.healzPink};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const CopyrightBar = styled.div`
  background-color: ${({ theme }) => theme.colors.healzPink};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 0.875rem;
  padding: ${({ theme }) => theme.spacing.sm};
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <Logo src={darkLogo} alt="Healz Logo" />
        <SocialIcons>
          <IconWrapper href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </IconWrapper>
          <IconWrapper href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </IconWrapper>
          <IconWrapper href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </IconWrapper>
        </SocialIcons>
      </FooterContainer>
      <CopyrightBar>
        © 2025. Todos os direitos reservados Healz.
      </CopyrightBar>
    </>
  );
}
