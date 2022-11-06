import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

devOptions: {
    tailwindConfig: './tailwind.config.js';
  }

  export default defineConfig({
    // ...
    integrations: [tailwind()],
  });