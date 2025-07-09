# Healz Checkin Server

This directory contains the backend server for the Healz Checkin application. It is built with Node.js and Express.

## Features
- RESTful API for Healz Checkin
- Handles backend logic and data processing

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   node index.js
   ```
   Or, if you have `nodemon` installed:
   ```bash
   npx nodemon index.js
   ```

## Project Structure
- `index.js` - Main entry point for the server
- `package.json` - Project metadata and dependencies
- `node_modules/` - Installed dependencies

## Configuration
- Update environment variables or configuration as needed in `index.js` or via `.env` (if supported).
- **É necessário criar o arquivo `credenciais` na raiz do projeto com as informações sensíveis para o funcionamento do servidor.**
  - Este arquivo deve conter as credenciais da API do Google Sheets.

## License
This project is licensed under the MIT License. 