const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const credentials = require('./credentials.json');
const spreadsheetId = process.env.SPREADSHEET_ID;

async function getSheetsService() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({ version: 'v4', auth });
}

app.post('/add', async (req, res) => {
  const { nome, cpf, nascimento } = req.body;
  if (!nome || !cpf) return res.status(400).json({ error: 'Nome e email são obrigatórios' });

  try {
    const sheets = await getSheetsService();
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:C',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[nome, cpf, nascimento]],
      },
    });
    res.status(200).json({ message: 'Dados salvos com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));