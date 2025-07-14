import darkLogo from '../../assets/darkLogo.svg';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

// Styled components do Footer
import  {
  FooterContainer,
  Logo,
  SocialList,
  SocialItem,
  IconWrapper,
  InfoText,
  CopyrightBar,
} from "../../styles/Footer.styles";

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
