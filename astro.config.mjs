// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
image: {
 domains:["https://gold-toad-177179.hostingersite.com"]
},
  vite: {
    plugins: [tailwindcss()]
  }
});
