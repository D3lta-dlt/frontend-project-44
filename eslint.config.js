import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'error',
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'only-multiline'],
      'eol-last': ['error', 'always'],
      'arrow-parens': ['error', 'as-needed'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'object-curly-spacing': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
    },
  },
  {
    ignores: ['node_modules/'],
  },
]
