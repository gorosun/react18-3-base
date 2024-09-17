import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'], // srcディレクトリ内のファイルを対象にする
    languageOptions: {
      parser: tseslintParser, // TypeScript用のパーサーを指定
      globals: {
        ...globals.browser,
        expect: 'readonly',
        test: 'readonly',
        vi: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect', // Reactのバージョンを自動検出
      },
    },
    plugins: {
      js,
      '@typescript-eslint': tseslint,
      react: pluginReact,
      prettier: prettierPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs['eslint-recommended'].rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...prettierConfig.rules, // prettierの設定を追加
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // PropTypesのルールを無効化
      'prettier/prettier': 'error', // prettierのルールを適用
    },
  },
];
