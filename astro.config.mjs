import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

devOptions: {
    tailwindConfig: './tailwind.config.js';
  }

  export default defineConfig({
    // ...
    output: "server",
    adapter: node({
      mode: "middleware"
    }),
  
    integrations: [tailwind(), react()],
  });