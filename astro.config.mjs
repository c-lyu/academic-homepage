// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    fallback: {
      zh: 'en',
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});