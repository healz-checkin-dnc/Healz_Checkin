import { useForm, type SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';
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
  token: string | null;
};

const CheckinForm = ({ token }: Props) => {
  const { register, handleSubmit, setValue } = useForm<Inputs>();

  useEffect(() => {
    if (!token) return;

    fetch(`http://localhost:3001/fetch-user?token=${token}`)
      .then((res) => {
        if (!res.ok) throw new Error("Token inválido ou expirado");
        return res.json();
      })
      .then((data: Inputs) => {
        Object.entries(data).forEach(([key, value]) => {
          setValue(key as keyof Inputs, value);
        });
      })
      .catch((err) => {
        console.error("❌ Erro ao buscar dados:", err);
        alert("Link inválido ou expirado. Solicite um novo check-in.");
      });
  }, [token, setValue]);

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
              {...register('name')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="zipCode">CEP</Label>
            <Input
              id="zipCode"
              placeholder="Digite o CEP"
              {...register('zipCode')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              placeholder="Digite seu CPF"
              {...register('cpf')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="street">Endereço</Label>
            <Input
              id="street"
              placeholder="Digite seu endereço"
              {...register('street')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="birthDate">Data de Nascimento</Label>
            <Input
              id="birthDate"
              type="date"
              {...register('birthDate')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="number">Número</Label>
            <Input
              id="number"
              placeholder="Digite o número"
              {...register('number')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="phoneNumber">Telefone (Whatsapp)</Label>
            <Input
              id="phoneNumber"
              placeholder="(11) 91234-5678"
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
              {...register('city')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="state">Estado</Label>
            <Input
              id="state"
              placeholder="Digite o estado"
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
