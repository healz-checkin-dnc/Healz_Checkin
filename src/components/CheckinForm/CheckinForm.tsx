import { useForm, type SubmitHandler } from 'react-hook-form';
import { CheckinButton } from '../CheckinButton/CheckinButton';
import HandleSubmit from '../../services/handleForm';

// Style 
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
    const handle = new HandleSubmit()
    const response = await handle.execute(data)
    alert(response.message)
  };

  return (
    <Container>
      <Title>Confira e preencha seus dados</Title>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <FormGrid>
          <InputGroup>
            <Label htmlFor="nome">Nome completo</Label>
            <Input
              id="name"
              placeholder="Digite seu "
              title="Digite seu  corretamente (pelo menos uma letra)"
              {...register('name')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cep">CEP</Label>
            <Input
              id="cep"
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
            <Label htmlFor="endereco">Endereço</Label>
            <Input
              id="endereco"
              placeholder="Digite seu endereço"
              title="Preencha o endereço"
              {...register('street')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="nascimento">Data de Nascimento</Label>
            <Input
              id="nascimento"
              type="date"
              title="Informe a data de nascimento"
              {...register('birthDate')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="numero">Número</Label>
            <Input
              id="numero"
              placeholder="Digite o número"
              title="Informe o número"
              {...register('number')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="telefone">Telefone (Whatsapp)</Label>
            <Input
              id="telefone"
              placeholder="(11) 91234-5678"
              title="Digite um telefone válido com DDD"
              {...register('phoneNumber')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="complemento">Complemento</Label>
            <Input id="complemento"
              placeholder="Opcional"
              {...register('complement')}
            />

          </InputGroup>

          <InputGroup>
            <Label htmlFor="cidade">Cidade</Label>
            <Input
              id="cidade"
              placeholder="Digite a cidade"
              title="Use apenas letras e espaços"
              {...register('city')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="estado">Estado</Label>
            <Input
              id="estado"
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
