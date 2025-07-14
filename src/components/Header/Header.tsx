import React from 'react';
import logo from '../../assets/logo.svg';

// Style
import {
  HeaderContainer,
  Logo,
  Title,
  RightSpace
} from "../../styles/Header.style"

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Healz Logo" />
      <Title>Bem-vindo(a) ao Check-in</Title>
      <RightSpace />
    </HeaderContainer>
  );
};

export default Header;
