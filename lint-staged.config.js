export default {
    '*': ['pnpm validate --'],
    '*.+(js|jsx|json|ts|tsx|astro)': ['prettier --write'],
};
