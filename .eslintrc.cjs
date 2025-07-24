/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // esse aqui integra com o prettier de forma completa
  ],
  rules: {
    //  Estilo
    'prettier/prettier': 'error',

    //  Regras React
    'react/react-in-jsx-scope': 'off', // Não precisa com React 17+
    'react/prop-types': 'off', // usando TS, não precisa disso

    //  Regras TypeScript
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
