// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import umami from '@yeskunall/astro-umami';
import { remarkModifiedTime } from './src/lib/remarkModifiedTime.mjs';

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.DEV
        ? 'http://localhost:4321/'
        : 'https://roshuipronali.shahid.pro/',

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [
        mdx({
            rehypePlugins: [remarkModifiedTime],
        }),
        react(),
        sitemap(),
        umami({ id: 'cfadc54a-416c-46e6-b4d1-a94984f36525' }),
    ],
});
