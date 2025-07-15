import React from 'react';
import logo from '../../assets/logo.svg';

// Style
import { HeaderContainer, Logo, Title, RightSpace } from '../../styles/Header.style';

const Header: React.FC = () => (
  <HeaderContainer role="banner" aria-label="Cabeçalho do site">
    <Logo src={logo} alt="Healz Logo" />
    <Title tabIndex={0}>Bem-vindo(a) ao Check-in</Title>
    <RightSpace aria-hidden="true" />
  </HeaderContainer>
);

export default Header;
