import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default {
  root: true,                      // Marca esse arquivo como config raiz
  parser: tsParser,                // Parser TypeScript oficial

  parserOptions: {
    ecmaVersion: 2020,             // Suporte à sintaxe moderna JS
    sourceType: 'module',          // Suporte a import/export
    ecmaFeatures: { jsx: true },   // Habilita JSX (React)
  },

  env: {
    browser: true,                 // Variáveis globais do navegador
    es2021: true,                  // Suporte para ES2021 globals
  },

  globals: globals.browser,        // Define globals do browser

  ignorePatterns: ['dist', 'node_modules', 'build'], // Ignora essas pastas

  plugins: [
    '@typescript-eslint',         // Regras TS
    'react-hooks',                // Hooks React
    'react-refresh',              // React Fast Refresh (dev)
    'prettier'                   // Integração com Prettier
  ],

  extends: [
    'eslint:recommended',                 // Regras recomendadas ESLint
    'plugin:@typescript-eslint/recommended',  // Regras recomendadas TS
    'plugin:react-hooks/recommended',    // Regras de hooks React
    'plugin:react-refresh/recommended',  // Regras React Fast Refresh
    'plugin:prettier/recommended',       // Integra ESLint + Prettier, mostra erros de formatação
  ],

  rules: {
    'prettier/prettier': 'error',        // Erro quando código quebra padrão Prettier
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn vars não usadas, ignora args que começam com _
    'react-hooks/rules-of-hooks': 'error',   // Hooks React: regras obrigatórias
    'react-hooks/exhaustive-deps': 'warn',   // Warn dependências em useEffect
    // Aqui pode adicionar regras extras personalizadas
  },

  settings: {
    react: { version: 'detect' },       // Detecta versão do React automaticamente
  },
}
