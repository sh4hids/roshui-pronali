/** @type {import("prettier").Config} */

export default {
    printWidth: 80,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'es5',
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
