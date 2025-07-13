//import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CheckinButton } from '../CheckinButton/CheckinButton';
import HandleSubmit from '../../services/handleForm';

// Tipagem do formulário
type Inputs = {
  name: string;
  cpf: string;
  birthDate: string;
  phoneNumber: string;
  zipCode: string;
  street: string;
  complement: string;
  number: string;
  city: string;
  state: string;
};

// Styled-components
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.blueDark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FormBox = styled.form`
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
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
  width: 100%;
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

// Componente funcional
const CheckinForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    const handle = new HandleSubmit();
    const response = await handle.execute(data);
    alert(response.message);
  };

  return (
    <Container>
      <Title>Confira e preencha seus dados</Title>
      <FormBox onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormGrid>
          <InputGroup>
            <Label htmlFor="nome">Nome completo</Label>
            <Input
              id="nome"
              {...register('name')}
              placeholder="Digite seu nome"
              required
              pattern=".*[A-Za-z]+.*"
              title="Digite seu nome corretamente (pelo menos uma letra)"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cep">CEP</Label>
            <Input
              id="cep"
              {...register('zipCode')}
              placeholder="Digite o CEP"
              required
              pattern="\d{8}"
              title="Digite o CEP com 8 números"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              {...register('cpf')}
              placeholder="Digite seu CPF"
              required
              pattern="\d{11}"
              title="Digite os 11 números do CPF sem ponto ou traço"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="endereco">Endereço</Label>
            <Input
              id="endereco"
              {...register('street')}
              placeholder="Digite seu endereço"
              required
              title="Preencha o endereço"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="nascimento">Data de Nascimento</Label>
            <Input
              id="nascimento"
              type="date"
              {...register('birthDate')}
              required
              title="Informe a data de nascimento"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="numero">Número</Label>
            <Input
              id="numero"
              {...register('number')}
              placeholder="Digite o número"
              required
              title="Informe o número"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="telefone">Telefone (Whatsapp)</Label>
            <Input
              id="telefone"
              {...register('phoneNumber')}
              placeholder="(11) 91234-5678"
              required
              pattern="\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}"
              title="Digite um telefone válido com DDD"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="complemento">Complemento</Label>
            <Input
              id="complemento"
              {...register('complement')}
              placeholder="Opcional"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cidade">Cidade</Label>
            <Input
              id="cidade"
              {...register('city')}
              placeholder="Digite a cidade"
              required
              pattern="^[A-Za-zÀ-ú\s]+$"
              title="Use apenas letras e espaços"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="estado">Estado</Label>
            <Input
              id="estado"
              {...register('state')}
              placeholder="Digite o estado"
              required
              pattern="^[A-Za-zÀ-ú\s]+$"
              title="Use apenas letras e espaços"
            />
          </InputGroup>
        </FormGrid>

        <CheckinButton type="submit">Realizar Check-in</CheckinButton>
      </FormBox>
    </Container>
  );
};

export default CheckinForm;
