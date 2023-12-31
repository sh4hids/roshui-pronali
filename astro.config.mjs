import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkModifiedTime } from './src/utils/remarkModifiedTime.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://roshuipronali.shahid.pro/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      rehypePlugins: [remarkModifiedTime],
    }),
    react(),
    sitemap(),
  ],
});
