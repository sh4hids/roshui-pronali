import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import { globalIgnores } from 'eslint/config';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default tseslint.config(
    includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
    globalIgnores(['src/pages/js-snippets.astro']),
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier,
    eslintPluginAstro.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node, // If in a Node.js environment
            },
        },
        rules: {},
    }
);
