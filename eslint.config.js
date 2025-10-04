import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import * as parserVue from 'vue-eslint-parser'
import configPrettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
import tseslint from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import pluginBoundaries from 'eslint-plugin-boundaries'
import globals from 'globals'

export default [
  {
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/*.local',
      '**/node_modules/**',
      '**/logs/**',
      '**/*.log',
      '**/.env',
      '**/.env.local',
      '**/.env.*.local',
      '**/.vscode/**',
      '**/.idea/**',
      '**/.DS_Store',
      '**/*.suo',
      '**/*.ntvs*',
      '**/*.njsproj',
      '**/*.sln',
      '**/*.sw?',
      '**/.vite/**',
    ],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue', '**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaVersion: 'latest',
        parser: parser,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      vue: pluginVue,
      prettier: pluginPrettier,
      boundaries: pluginBoundaries,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...configPrettier.rules,
      'vue/no-undef-components': 'error',
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': 'error',
      'no-console': ['error', { allow: ['error', 'warn'] }],

      // FSD Architecture rules
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: ['app'],
              allow: ['pages', 'widgets', 'features', 'entities', 'shared'],
            },
            {
              from: ['pages'],
              allow: ['widgets', 'features', 'entities', 'shared'],
            },
            {
              from: ['widgets'],
              allow: ['features', 'entities', 'shared'],
            },
            {
              from: ['features'],
              allow: ['entities', 'shared'],
            },
            {
              from: ['entities'],
              allow: ['shared'],
            },
            {
              from: ['shared'],
              allow: ['shared'],
            },
          ],
        },
      ],
    },
    settings: {
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**' },
        { type: 'pages', pattern: 'src/pages/**' },
        { type: 'widgets', pattern: 'src/widgets/**' },
        { type: 'features', pattern: 'src/features/**' },
        { type: 'entities', pattern: 'src/entities/**' },
        { type: 'shared', pattern: 'src/shared/**' },
      ],
      'boundaries/ignore': ['**/*.spec.*', '**/*.test.*'],
    },
  },
  // Test files - allow Vitest globals
  {
    files: ['**/*.test.ts', '**/*.test.js', '**/*.spec.ts', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // Config files - allow Node.js globals
  {
    files: ['*.config.js', '*.config.ts', '*.config.mjs', '**/*.config.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
