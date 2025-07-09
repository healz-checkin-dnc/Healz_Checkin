import React from 'react';
import styled from 'styled-components';
import { CheckinButton } from '../CheckinButton/CheckinButton';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.blueDark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FormBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  box-shadow: 0 6px 12px -2px ${({ theme }) => theme.colors.pinkShadow}80;
  background-color: ${({ theme }) => theme.colors.greyLight};
  border-radius: 100px;
  font-size: 1rem;
  outline-color: #aaa;
  &::placeholder {
    color: #aaa;
  }
`;

const CheckinForm: React.FC = () => {
  return (
    <Container>
      <Title>Confira e preencha seus dados nos campos abaixo</Title>
      <FormBox>
        <FormGrid>
          <InputGroup>
            <Label>Nome completo</Label>
            <Input placeholder="Digite seu nome" />
          </InputGroup>
          <InputGroup>
            <Label>CEP</Label>
            <Input placeholder="Digite o CEP" />
          </InputGroup>

          <InputGroup>
            <Label>CPF</Label>
            <Input placeholder="Digite seu CPF" />
          </InputGroup>
          <InputGroup>
            <Label>Endereço</Label>
            <Input placeholder="Digite seu endereço" />
          </InputGroup>

          <InputGroup>
            <Label>Data de Nascimento</Label>
            <Input placeholder="Digite sua data de nascimento" />
          </InputGroup>
          <InputGroup>
            <Label>Número</Label>
            <Input placeholder="Digite o número" />
          </InputGroup>

          <InputGroup>
            <Label>Telefone (Whatsapp)</Label>
            <Input placeholder="Digite seu telefone whatsapp" />
          </InputGroup>
          <InputGroup>
            <Label>Complemento</Label>
            <Input placeholder="Opcional" />
          </InputGroup>

          <InputGroup>
            <Label>Cidade</Label>
            <Input placeholder="Digite a cidade" />
          </InputGroup>

          <InputGroup>
            <Label>Estado</Label>
            <Input placeholder="Digite o estado" />
          </InputGroup>
          
        </FormGrid>
        <CheckinButton type="submit">Realizar Check-in</CheckinButton>
      </FormBox>
    </Container>
  );
};


export default CheckinForm;
