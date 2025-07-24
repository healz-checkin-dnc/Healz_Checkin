import { useForm, type SubmitHandler } from 'react-hook-form';
import { useEffect, useState, useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckinSchema, type CheckinSchemaType } from '../../schemas/checkinSchema';
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
} from '../../styles/CheckinForm.styles';

import { ErrorMessage } from '../../styles/CheckinForm.styles';

type Props = {
  token: string | null;
};

const prefillData: CheckinSchemaType = {
  name: '',
  cpf: '',
  birthDate: '',
  phoneNumber: '',
  zipCode: '',
  street: '',
  complement: '',
  number: '',
  city: '',
  state: '',
};

const CheckinForm = ({ token }: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const memoizedDefaults = useMemo(() => prefillData, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CheckinSchemaType>({
    resolver: zodResolver(CheckinSchema),
    defaultValues: memoizedDefaults,
    mode: 'onChange',
  });

  useEffect(() => {
    console.log('🔍 useEffect firing, token =', token);
    if (!token) return;

    fetch(`/.netlify/functions/fetch-user?token=${token}`)
      .then((res) => {
        if (!res.ok) throw new Error('Token inválido ou expirado');
        return res.json();
      })
      .then((data: CheckinSchemaType) => {
        console.log('✅ Dados recebidos:', data);
        reset(data);
      })
      .catch((err) => {
        console.error('❌ Erro ao buscar dados:', err);
        alert('Link inválido ou expirado. Solicite um novo check-in.');
      });
  }, [token, reset]);

  const onSubmit: SubmitHandler<CheckinSchemaType> = async (data) => {
    setSubmitMessage(null);
    try {
      const handle = new HandleSubmit();
      const response = await handle.execute(data);
      setSubmitMessage(response.message);
      setIsSubmitted(true);
    } catch {
      setSubmitMessage('Erro ao fazer check-in.');
    }
  };

  return (
    <Container>
      <Title>{isSubmitted ? 'Obrigado pelo seu check-in!' : 'Confira e preencha seus dados'}</Title>
      {!isSubmitted ? (
        <FormBox onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormGrid>
            <InputGroup>
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                placeholder="Digite seu nome"
                {...register('name')}
                aria-invalid={!!errors.name}
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="zipCode">CEP</Label>
              <Input
                id="zipCode"
                placeholder="Digite o CEP"
                {...register('zipCode')}
                aria-invalid={!!errors.zipCode}
              />
              {errors.zipCode && <ErrorMessage>{errors.zipCode.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                placeholder="Digite seu CPF"
                {...register('cpf')}
                aria-invalid={!!errors.cpf}
              />
              {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="street">Endereço</Label>
              <Input
                id="street"
                placeholder="Digite seu endereço"
                {...register('street')}
                aria-invalid={!!errors.street}
              />
              {errors.street && <ErrorMessage>{errors.street.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="birthDate">Data de Nascimento</Label>
              <Input
                id="birthDate"
                type="date"
                {...register('birthDate')}
                aria-invalid={!!errors.birthDate}
              />
              {errors.birthDate && <ErrorMessage>{errors.birthDate.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="number">Número</Label>
              <Input
                id="number"
                placeholder="Digite o número"
                {...register('number')}
                aria-invalid={!!errors.number}
              />
              {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="phoneNumber">Telefone (Whatsapp)</Label>
              <Input
                id="phoneNumber"
                placeholder="(11) 91234-5678"
                {...register('phoneNumber')}
                aria-invalid={!!errors.phoneNumber}
              />
              {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="complement">Complemento</Label>
              <Input
                id="complement"
                placeholder="Opcional"
                {...register('complement')}
                aria-invalid={!!errors.complement}
              />
              {errors.complement && <ErrorMessage>{errors.complement.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="city">Cidade</Label>
              <Input
                id="city"
                placeholder="Digite a cidade"
                {...register('city')}
                aria-invalid={!!errors.city}
              />
              {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="state">Estado</Label>
              <Input
                id="state"
                placeholder="Digite o estado"
                {...register('state')}
                aria-invalid={!!errors.state}
              />
              {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
            </InputGroup>
          </FormGrid>
          {submitMessage && (
            <ErrorMessage style={{ color: isSubmitted ? '#27ae60' : '#e63946', marginTop: '16px' }}>
              {submitMessage}
            </ErrorMessage>
          )}

          <CheckinButton
            type="submit"
            disabled={isSubmitting || !isValid}
            aria-label="Fazer check-in"
          >
            {isSubmitting ? (
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
      ) : (
        <p>Obrigado por realizar seu check-in! Seu formulário foi enviado com sucesso.</p>
      )}
    </Container>
  );
};

export default CheckinForm;
