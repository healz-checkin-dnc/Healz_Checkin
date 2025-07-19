import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { CheckinButton } from '../CheckinButton/CheckinButton';
import HandleSubmit from '../../services/handleForm';

import {
  Container,
  Title,
  FormBox,
  FormGrid,
  InputGroup,
  Label,
  Input,
  ErrorMessage,  // Adicionando o componente de erro
} from '../../styles/CheckinForm.styles';

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

type Props = {
  prefillData: Inputs;
};

const CheckinForm = ({ prefillData }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: prefillData, // Passando os dados diretamente
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const handle = new HandleSubmit();
      const response = await handle.execute(data);
      alert(response.message);
    } catch (error) {
      alert("Ocorreu um erro ao enviar os dados. Tente novamente.");
    }
  };

  return (
    <Container>
      <Title>Confira e preencha seus dados</Title>
      <FormBox onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormGrid>
          {/* Nome */}
          <InputGroup>
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Digite seu nome"
              {...register('name', { required: 'Nome é obrigatório' })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </InputGroup>

          {/* CEP */}
          <InputGroup>
            <Label htmlFor="zipCode">CEP</Label>
            <Input
              id="zipCode"
              placeholder="Digite o CEP"
              {...register('zipCode', { required: 'CEP é obrigatório' })}
            />
            {errors.zipCode && <ErrorMessage>{errors.zipCode.message}</ErrorMessage>}
          </InputGroup>

          {/* CPF */}
          <InputGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              placeholder="Digite seu CPF"
              {...register('cpf', {
                required: 'CPF é obrigatório',
                pattern: {
                  value: /^[0-9]{11}$/,  // Regex para validar CPF
                  message: 'CPF inválido',
                },
              })}
            />
            {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
          </InputGroup>

          {/* Endereço */}
          <InputGroup>
            <Label htmlFor="street">Endereço</Label>
            <Input
              id="street"
              placeholder="Digite seu endereço"
              {...register('street', { required: 'Endereço é obrigatório' })}
            />
            {errors.street && <ErrorMessage>{errors.street.message}</ErrorMessage>}
          </InputGroup>

          {/* Data de Nascimento */}
          <InputGroup>
            <Label htmlFor="birthDate">Data de Nascimento</Label>
            <Input
              id="birthDate"
              type="date"
              {...register('birthDate', { required: 'Data de nascimento é obrigatória' })}
            />
            {errors.birthDate && <ErrorMessage>{errors.birthDate.message}</ErrorMessage>}
          </InputGroup>

          {/* Número */}
          <InputGroup>
            <Label htmlFor="number">Número</Label>
            <Input
              id="number"
              placeholder="Digite o número"
              {...register('number', { required: 'Número é obrigatório' })}
            />
            {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
          </InputGroup>

          {/* Telefone */}
          <InputGroup>
            <Label htmlFor="phoneNumber">Telefone (Whatsapp)</Label>
            <Input
              id="phoneNumber"
              placeholder="(11) 91234-5678"
              {...register('phoneNumber', { required: 'Telefone é obrigatório' })}
            />
            {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}
          </InputGroup>

          {/* Complemento */}
          <InputGroup>
            <Label htmlFor="complement">Complemento</Label>
            <Input
              id="complement"
              placeholder="Opcional"
              {...register('complement')}
            />
          </InputGroup>

          {/* Cidade */}
          <InputGroup>
            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              placeholder="Digite a cidade"
              {...register('city', { required: 'Cidade é obrigatória' })}
            />
            {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
          </InputGroup>

          {/* Estado */}
          <InputGroup>
            <Label htmlFor="state">Estado</Label>
            <Input
              id="state"
              placeholder="Digite o estado"
              {...register('state', { required: 'Estado é obrigatório' })}
            />
            {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
          </InputGroup>
        </FormGrid>

        <CheckinButton type="submit">Realizar Check-in</CheckinButton>
      </FormBox>
    </Container>
  );
};

export default CheckinForm;
