import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginAstro from 'eslint-plugin-astro';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default tseslint.config(
    includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
    globalIgnores(['src/pages/js-snippets.astro']),
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier,
    eslintPluginAstro.configs.recommended,
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: eslintPluginAstro.parser,
            parserOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },
    {
        languageOptions: {
            globals: {
                ...globals.node, // If in a Node.js environment
            },
        },
        rules: {},
    },
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    }
);
