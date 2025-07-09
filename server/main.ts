import express, { json, Request, Response } from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import * as dotenv from 'dotenv';
import * as credentials from './credentials.json';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

const spreadsheetId = process.env.SPREADSHEET_ID;

async function getSheetsService() {
  const auth = new google.auth.GoogleAuth({
    credentials: credentials as any,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({ version: 'v4', auth });
}

app.post('/add', async (req: Request, res: Response) => {
  const { name, cpf, birthDate, phoneNumber, zipCode, street, complement, number, city, state } = req.body;
  try {
    const sheets = await getSheetsService();
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:C',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, cpf, birthDate, phoneNumber, zipCode, street, complement, number, city, state]],
      },
    });
    res.status(200).json({ message: 'Dados salvos com sucesso!' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));