import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: {globals: globals.node}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {ignores: ['node_modules/*', 'dist/*', '**/esbuild.js']},
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}]
    }
  }
]
