module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/restrict-template-expressions':
      'off',
    '@typescript-eslint/explicit-function-return-type':
      'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/await-thenable': 'off',
    'import/no-named-default': 'off',
    'react/jsx-key': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'react/display-name': 'off',
    'import/no-duplicates': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-confusing-void-expression':
      'off',
    '@typescript-eslint/no-var-requires': 'off',
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
