import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkinSchema, type CheckinSchemaType } from '../CheckinForm/checkinSchema';
import InputMask from 'react-input-mask';
import { CheckinButton } from '../CheckinButton/CheckinButton';
import HandleSubmit from '../../services/handleForm';
import { FaSignInAlt, FaSpinner } from 'react-icons/fa';

import {
  Container,
  Title,
  FormBox,
  FormGrid,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
} from '../../styles/CheckinForm.styles';

type Props = {
  token: string | null;
};

const CheckinForm = ({ token }: Props) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CheckinSchemaType>({
    resolver: zodResolver(checkinSchema),
  });

  useEffect(() => {
    if (!token) return;

    fetch(`http://localhost:3001/fetch-user?token=${token}`)
      .then((res) => {
        if (!res.ok) throw new Error('Token inválido ou expirado');
        return res.json();
      })
      .then((data: CheckinSchemaType) => {
        Object.entries(data).forEach(([key, value]) => {
          setValue(key as keyof CheckinSchemaType, value);
        });
      })
      .catch((err) => {
        console.error('❌ Erro ao buscar dados:', err);
        alert('Link inválido ou expirado. Solicite um novo check-in.');
      });
  }, [token, setValue]);

  const onSubmit: SubmitHandler<CheckinSchemaType> = async (data) => {
    setLoading(true);
    const handle = new HandleSubmit();
    try {
      const response = await handle.execute(data);
      alert(response.message);
    } catch (error) {
      alert('Erro ao fazer check-in.');
    } finally {
      setLoading(false);
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
            <Input id="name" placeholder="Digite seu nome" {...register('name')} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </InputGroup>

          {/* CEP com máscara */}
          <InputGroup>
            <Label htmlFor="zipCode">CEP</Label>
            <Controller
              control={control}
              name="zipCode"
              render={({ field }) => (
                <InputMask mask="99999-999" placeholder="Digite o CEP" {...field} id="zipCode">
                  {(inputProps: any) => <Input {...inputProps} />}
                </InputMask>
              )}
            />
            {errors.zipCode && <ErrorMessage>{errors.zipCode.message}</ErrorMessage>}
          </InputGroup>

          {/* CPF com máscara */}
          <InputGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Controller
              control={control}
              name="cpf"
              render={({ field }) => (
                <InputMask mask="999.999.999-99" placeholder="Digite seu CPF" {...field} id="cpf">
                  {(inputProps: any) => <Input {...inputProps} />}
                </InputMask>
              )}
            />
            {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
          </InputGroup>

          {/* Endereço */}
          <InputGroup>
            <Label htmlFor="street">Endereço</Label>
            <Input id="street" placeholder="Digite seu endereço" {...register('street')} />
            {errors.street && <ErrorMessage>{errors.street.message}</ErrorMessage>}
          </InputGroup>

          {/* Data de nascimento */}
          <InputGroup>
            <Label htmlFor="birthDate">Data de Nascimento</Label>
            <Input id="birthDate" type="date" {...register('birthDate')} />
            {errors.birthDate && <ErrorMessage>{errors.birthDate.message}</ErrorMessage>}
          </InputGroup>

          {/* Número */}
          <InputGroup>
            <Label htmlFor="number">Número</Label>
            <Input id="number" placeholder="Digite o número" {...register('number')} />
            {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
          </InputGroup>

          {/* Telefone com máscara */}
          <InputGroup>
            <Label htmlFor="phoneNumber">Telefone (Whatsapp)</Label>
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <InputMask
                  mask="(99) 99999-9999"
                  placeholder="(11) 91234-5678"
                  {...field}
                  id="phoneNumber"
                >
                  {(inputProps: any) => <Input {...inputProps} />}
                </InputMask>
              )}
            />
            {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}
          </InputGroup>

          {/* Complemento */}
          <InputGroup>
            <Label htmlFor="complement">Complemento</Label>
            <Input id="complement" placeholder="Opcional" {...register('complement')} />
          </InputGroup>

          {/* Cidade */}
          <InputGroup>
            <Label htmlFor="city">Cidade</Label>
            <Input id="city" placeholder="Digite a cidade" {...register('city')} />
            {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
          </InputGroup>

          {/* Estado */}
          <InputGroup>
            <Label htmlFor="state">Estado</Label>
            <Input id="state" placeholder="Digite o estado" {...register('state')} />
            {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
          </InputGroup>
        </FormGrid>

        <CheckinButton type="submit" disabled={loading} aria-label="Fazer check-in">
          {loading ? (
            <>
              <FaSpinner className="spinner" style={{ marginRight: '8px' }} />
              Carregando...
            </>
          ) : (
            <>
              <FaSignInAlt style={{ marginRight: '8px' }} />
              Realizar Check-in
            </>
          )}
        </CheckinButton>
      </FormBox>
    </Container>
  );
};

export default CheckinForm;
