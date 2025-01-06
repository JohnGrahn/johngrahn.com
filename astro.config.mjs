// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import yaml from '@rollup/plugin-yaml';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        'devicon': ['*'],
        'vscode-icons': ['*']
      }
    })
  ],
  vite: {
    plugins: [yaml()]
  }
});