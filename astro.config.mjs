// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { remarkModifiedTime } from '@/lib/remarkModifiedTime.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://roshuipronali.shahid.pro/',

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [
        mdx({
            rehypePlugins: [remarkModifiedTime],
        }),
        react(),
        sitemap(),
    ],
});

