/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,        // Variáveis globais do navegador
    es2021: true,         // Suporte para ES2021
  },

  parser: '@typescript-eslint/parser',  // Parser oficial TS

  parserOptions: {
    ecmaFeatures: {
      jsx: true,         // Suporte JSX (React)
    },
    ecmaVersion: 'latest',  // Sintaxe JS mais moderna
    sourceType: 'module',   // Usar import/export
  },

  settings: {
    react: {
      version: 'detect',    // Detecta versão React automaticamente
    },
  },

  plugins: [
    'react',               // Regras React
    'jsx-a11y',            // Regras de acessibilidade
    '@typescript-eslint',  // Regras TS
    'prettier',            // Integra com Prettier
  ],

  extends: [
    'eslint:recommended',           // Regras básicas ESLint
    'plugin:react/recommended',     // Regras React recomendadas
    'plugin:jsx-a11y/recommended',  // Regras acessibilidade recomendadas
    'plugin:@typescript-eslint/recommended', // Regras TS recomendadas
    'plugin:prettier/recommended',  // Faz ESLint respeitar Prettier e mostrar erros de formatação
  ],

  rules: {
    // Estilo de código
    'prettier/prettier': 'error',   // Erro se o código não seguir Prettier

    // Regras React específicas
    'react/react-in-jsx-scope': 'off', // React 17+ não precisa importar React
    'react/prop-types': 'off',          // TS já faz a validação de props

    // Regras TS específicas
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn vars não usadas, ignora args começando com _
    '@typescript-eslint/explicit-module-boundary-types': 'off',               // Não exigir tipos explícitos em funções exportadas
  },
};
