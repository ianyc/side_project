import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';


export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: globals.browser } },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17 以後不再需要在每個文件中導入 React
      'arrow-spacing': 2,
      'indent': [
        'error',
        2,
        {
          'ignoreComments': true,
          'MemberExpression': 1,
          'SwitchCase': 1,
          'VariableDeclarator': 'first',
        },
      ],
      'jsx-quotes': ['error', 'prefer-double'],
      'linebreak-style': 0,
      'no-console': 0,
      'no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_',
          'caughtErrors': 'all',
        },
      ],
      'no-invalid-this': 0,
      'babel/no-invalid-this': 0,
      'object-curly-spacing': ['error', 'always'],
      'require-jsdoc': 0,
      'space-infix-ops': 2,
      'valid-jsdoc': 0,
      'react/sort-comp': 2,
      'react-hooks/rules-of-hooks': 2,
      'no-trailing-spaces': 2,
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    },
  },
]);
