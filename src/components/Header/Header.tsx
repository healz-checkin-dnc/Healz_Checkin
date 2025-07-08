import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.blueDark};
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.main};
  line-height: 1.5;
`;

const RightSpace = styled.div`
  width: 2.5rem; // Match logo size to keep visual balance
`;

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
