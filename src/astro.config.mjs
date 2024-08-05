import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { collections } from './src/content/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    outDir: 'dist',
  },
  content: {
    collections,
  },
});
