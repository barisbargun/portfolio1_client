import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
      'jsx-a11y': jsxA11y,
      unicorn: unicorn,
      import: importPlugin,
      react: react
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...unicorn.configs.recommended.rules,
      'linebreak-style': ['error', 'unix'],

      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: true
        }
      ],

      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/heading-has-content': 'off',

      'simple-import-sort/imports': 'warn',

      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'warn',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            // disables cross-feature imports:
            // eg. src/features/discussions should not import from src/features/comments, etc.
            {
              target: './src/features/contact',
              from: './src/features',
              except: ['./contact']
            },
            // enforce unidirectional codebase:

            // e.g. src/app can import from src/features but not the other way around
            {
              target: './src/features',
              from: './src/app'
            },

            // e.g src/features and src/app can import from these shared modules but not the other way around
            {
              target: [
                './src/components',
                './src/hooks',
                './src/lib',
                './src/types',
                './src/utils'
              ],
              from: ['./src/features', './src/app']
            }
          ]
        }
      ],

      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-empty-file': 'off',

      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    files: ['src/components/ui/**/*.tsx'],
    rules: {
      'unicorn/no-abusive-eslint-disable': 'off'
    }
  },
  {
    files: ['src/assets/**/*.ts'],
    rules: {
      'import/no-anonymous-default-export': 'off',
      'simple-import-sort/imports': 'off'
    }
  },
  eslintConfigPrettier
)
