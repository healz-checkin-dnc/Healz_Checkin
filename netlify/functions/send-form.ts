import { Handler } from '@netlify/functions';
import { google } from 'googleapis';
import type { JWTInput } from 'google-auth-library';

const spreadsheetId = process.env.SPREADSHEET_ID;
const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS!);

async function getSheetsService() {
  const auth = new google.auth.GoogleAuth({
    credentials: credentials as JWTInput,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body || '{}');

  try {
    const sheets = await getSheetsService();
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:C',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          data.name,
          data.cpf,
          data.birthDate,
          data.phoneNumber,
          data.zipCode,
          data.street,
          data.complement,
          data.number,
          data.city,
          data.state
        ]],
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Dados salvos com sucesso!' }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err instanceof Error ? err.message : 'Erro desconhecido',
      }),
    };
  }
};

export { handler };
