import { useForm, type SubmitHandler } from 'react-hook-form';
import { CheckinButton } from '../CheckinButton/CheckinButton';
import HandleSubmit from '../../services/handleForm';

// Styled components for CheckinForm
import {
  Container,
  Title,
  FormBox,
  FormGrid,
  InputGroup,
  Label,
  Input,
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

const CheckinForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
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
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Digite seu nome"
              title="Digite seu nome corretamente (pelo menos uma letra)"
              {...register('name')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="zipCode">CEP</Label>
            <Input
              id="zipCode"
              placeholder="Digite o CEP"
              title="Digite o CEP com 8 números"
              {...register('zipCode')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              placeholder="Digite seu CPF"
              title="Digite os 11 números do CPF sem ponto ou traço"
              {...register('cpf')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="street">Endereço</Label>
            <Input
              id="street"
              placeholder="Digite seu endereço"
              title="Preencha o endereço"
              {...register('street')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="birthDate">Data de Nascimento</Label>
            <Input
              id="birthDate"
              type="date"
              title="Informe a data de nascimento"
              {...register('birthDate')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="number">Número</Label>
            <Input
              id="number"
              placeholder="Digite o número"
              title="Informe o número"
              {...register('number')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="phoneNumber">Telefone (Whatsapp)</Label>
            <Input
              id="phoneNumber"
              placeholder="(11) 91234-5678"
              title="Digite um telefone válido com DDD"
              {...register('phoneNumber')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="complement">Complemento</Label>
            <Input
              id="complement"
              placeholder="Opcional"
              {...register('complement')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              placeholder="Digite a cidade"
              title="Use apenas letras e espaços"
              {...register('city')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="state">Estado</Label>
            <Input
              id="state"
              placeholder="Digite o estado"
              title="Use apenas letras e espaços"
              {...register('state')}
            />
          </InputGroup>
        </FormGrid>

        <CheckinButton type="submit">Realizar Check-in</CheckinButton>
      </FormBox>
    </Container>
  );
};

export default CheckinForm;
