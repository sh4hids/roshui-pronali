export default {
    '*': ['pnpm run validate --'],
    '*.+(js|jsx|json|ts|tsx|astro)': ['prettier --write'],
};
