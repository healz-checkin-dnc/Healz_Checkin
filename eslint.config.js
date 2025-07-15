import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default {
  root: true,
  parser: tsParser,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    es2021: true,
  },
  globals: globals.browser,
  ignorePatterns: ['dist', 'node_modules', 'build'],
  plugins: ['@typescript-eslint', 'react-hooks', 'react-refresh', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-refresh/recommended',
    'plugin:prettier/recommended', // Faz o ESLint respeitar o Prettier e mostrar erros de formatação
  ],
  rules: {
    'prettier/prettier': 'error', // Erro se o código não seguir Prettier
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Pode adicionar regras extras aqui...
  },
  settings: {
    react: { version: 'detect' },
  },
}
