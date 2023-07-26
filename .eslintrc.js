module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended', // For accessibility linting
    ],
    plugins: ['react', 'jsx-a11y'],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      // Add any custom ESLint rules or override rules here
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the version of React
      },
    },
  };
  