export default {
    '**/*.{js,mjs,ts,tsx,astro}': ['eslint --fix'],
    '**/*.{js,mjs,ts,tsx,astro,json,md,yml,yaml}': ['prettier --write'],
};
