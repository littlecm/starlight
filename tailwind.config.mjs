import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f9fafb',
        'primary': '#2563eb',
        'primary-foreground': '#ffffff',
        'primary-hover': '#1e40af',
        'border-color': '#d1d5db',
        'border-hover': '#a1a1aa',
        'text': '#111827',
        'text-muted': '#6b7280',
        'hover-bg': '#e5e7eb',
      },
    },
  },
  plugins: [],
});
