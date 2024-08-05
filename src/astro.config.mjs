import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    outDir: 'dist',
  },
  content: {
    collections: {
      docs: {
        directory: './src/content/docs',
      },
    },
  },
});
