import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const token = event.queryStringParameters?.token;

  if (token === 'abc123') {
    return {
      statusCode: 200,
      body: JSON.stringify({
        name: 'Maria Teste',
        cpf: '12345678900',
        birthDate: '1990-01-01',
        phoneNumber: '11999999999',
        zipCode: '12345678',
        street: 'Rua Fictícia',
        complement: 'apto 5',
        number: '123',
        city: 'São Paulo',
        state: 'SP',
      }),
    };
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Token inválido' }),
  };
};

export { handler };
