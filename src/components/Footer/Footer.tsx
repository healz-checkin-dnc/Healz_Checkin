import darkLogo from '../../assets/darkLogo.png';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

// Footer.style.tx
import {
  FooterContainer,
  Logo,
  SocialList,
  SocialItem,
  IconWrapper,
  InfoText,
  CopyrightBar,
} from '../../styles/Footer.styles';

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <div>
          <Logo src={darkLogo} alt="Healz Logo" />
          <InfoText>
            R. Dr. Ovídio Pires de Campos, 225 <br />
            Cerqueira César, São Paulo - SP, 05403-010
          </InfoText>
        </div>

        <nav aria-label="Redes sociais da Healz">
          <SocialList>
            <SocialItem>
              <IconWrapper
                href="https://www.linkedin.com/company/healzmarketing/"
                aria-label="Linkedin da Healz"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaLinkedinIn />
              </IconWrapper>
            </SocialItem>
            <SocialItem>
              <IconWrapper
                href="https://www.instagram.com/healzmkt/"
                aria-label="Instagram da Healz"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaInstagram />
              </IconWrapper>
            </SocialItem>
            <SocialItem>
              <IconWrapper
                href="https://wa.me/5511917448546"
                aria-label="WhatsApp da Healz"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaWhatsapp />
              </IconWrapper>
            </SocialItem>
          </SocialList>
        </nav>
      </FooterContainer>

      <CopyrightBar>© 2025. Todos os direitos reservados Healz.</CopyrightBar>
    </>
  );
}
