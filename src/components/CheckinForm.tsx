import React from 'react';
import styled from 'styled-components';
import { CheckinButton } from './CheckinButton';

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
  border-radius: 1rem;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  color: #333;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  box-shadow: 0 6px 12px -2px ${({ theme }) => theme.colors.pinkShadow}80;
  background-color: ${({ theme }) => theme.colors.greyLight};
  border-radius: 999px;
  font-size: 1rem;
  &::placeholder {
    color: #aaa;
  }
`;

const CheckinForm: React.FC = () => {
  return (
    <Container>
      <Title>Confira seus dados abaixo e preencha caso necessário</Title>
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
            <Label>Plano de saúde</Label>
            <Input placeholder="Digite o plano de Saúde" />
          </InputGroup>
          <InputGroup>
            <Label>Logradouro</Label>
            <Input placeholder="Digite a rua" />
          </InputGroup>

          <InputGroup>
            <Label>Número da carteirinha</Label>
            <Input placeholder="Digite os número da carteirinha" />
          </InputGroup>
          <InputGroup>
            <Label>Número</Label>
            <Input placeholder="Digite o número" />
          </InputGroup>

          <InputGroup>
            <Label>Nome do beneficiário</Label>
            <Input placeholder="Digite o nome do beneficiário" />
          </InputGroup>
          <InputGroup>
            <Label>Complemento</Label>
            <Input placeholder="Opcional" />
          </InputGroup>

          <InputGroup>
            <Label>Nome da operadora</Label>
            <Input placeholder="Digite os dados da carteirinha" />
          </InputGroup>
          <InputGroup>
            <Label>Bairro</Label>
            <Input placeholder="Digite o bairro" />
          </InputGroup>

          <div></div> {/* empty cell for spacing */}
          <InputGroup>
            <Label>Cidade</Label>
            <Input placeholder="Digite a cidade" />
          </InputGroup>

          <div></div>
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
