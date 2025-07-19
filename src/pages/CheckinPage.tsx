import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CheckinForm from '../components/CheckinForm/CheckinForm';
import styled, { keyframes } from 'styled-components';

// Animação de fade-in
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Estilo para o contêiner principal da CheckinPage com fade-in
const CheckinContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;  // Aplica a animação de fade-in por 1 segundo
  min-height: 100vh;  // Garante que o contêiner ocupe pelo menos a altura da tela
  padding: 0 5px;  // Adicionando algum padding horizontal para garantir espaçamento adequado
  box-sizing: border-box;  // Garante que o padding não afete a largura
  max-width: 1400px;  /* Define um tamanho máximo para o conteúdo */
  width: 100%;  /* Garante que o conteúdo ocupe toda a largura disponível até o máximo */
  margin: 0 auto;  /* Centraliza o conteúdo horizontalmente */
`;

export default function CheckinPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // Pré-preenchendo os dados do formulário com os parâmetros da URL
  const prefillData = {
    name: params.get('name') || '',
    cpf: params.get('cpf') || '',
    birthDate: params.get('birthDate') || '',
    phoneNumber: params.get('phoneNumber') || '',
    zipCode: params.get('zipCode') || '',
    street: params.get('street') || '',
    complement: params.get('complement') || '',
    number: params.get('number') || '',
    city: params.get('city') || '',
    state: params.get('state') || '',
  };

  return (
    <CheckinContainer>
      <Header />
      <CheckinForm prefillData={prefillData} /> {/* Passando os dados para o formulário */}
      <Footer />
    </CheckinContainer>
  );
}
